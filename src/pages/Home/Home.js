import React, { Fragment, useReducer, useEffect, useCallback, useState, useMemo, useRef } from 'react';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledGridContainer, StyledGridItem, NothingFound } from './styles';
import {connect} from 'react-redux';
import { getUsers } from '../../redux/actions/dataActions';

const Home = ({ data, getUsers }) => {
    const currentUsers  = data.currentUsers;
    const fetchUsers = getUsers;

    const [profiles, setProfiles] = useState([]);
    const [showProfiles, setShowProfiles] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const isMounted = useRef(true);

    const mockData = useCallback(()=> ([
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        },
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ]), []);

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        setShowProfiles(currentUsers);
        setProfiles(currentUsers);
        
        return () => isMounted.current = false;
    }, [isMounted, currentUsers]);

    const reducer = (profiles, action) => {
        switch (action.type) {
          case "all":
            return showProfiles;

          case "search":
            if (searchValue.length === 0) {
               return showProfiles
            }
            
            const searchValueToLowerCase = searchValue.toLowerCase();
            const filteredProfiles = showProfiles.filter((item) => {
                  if (
                    item.first_name.toLowerCase().includes(searchValueToLowerCase) || 
                  item.last_name.toLowerCase().includes(searchValueToLowerCase) 
                  ) {
                    return true;
                  }
                  return false;
                })
    
            return filteredProfiles;
    
          default:
            return showProfiles;
        }
      };

    const [state, dispatch] = useReducer(reducer, profiles); 

      useEffect(() => {
        if (isMounted.current === true && profiles) {
          if (searchValue.length === 0) {
            dispatch({ type: "all" });
          }
          if (searchValue.length !== 0) {
            dispatch({ type: "search" });
          }
        }

      }, [isMounted, searchValue, profiles]);

      const ourUsers = useMemo(() => {
        if(searchValue.length === 0 && profiles.length > 0) {
          return profiles;
        }

        if(searchValue.length > 0 && profiles.length > 0) {

          const searchValueToLowerCase = searchValue.toLowerCase();
            const filteredProfiles = showProfiles.filter((item) => {
                  if (
                    item.first_name.toLowerCase().includes(searchValueToLowerCase) || 
                  item.last_name.toLowerCase().includes(searchValueToLowerCase) 
                  ) {
                    return true;
                  }
                  return false;
                })
    
            return filteredProfiles;

        }

        return profiles;
      }, [searchValue, profiles]);

  
      const handleFilter = (event) => {
        setSearchValue(event.currentTarget.value);
      /*  if (isMounted.current) {
          dispatch({
            type: "search",
          });
        }*/
      };

    const users = ourUsers.length > 0 ? (ourUsers.map((user) => (
        <StyledGridItem key={user.id} item xs={12} sm={4} md={3}>
         <Card 
          userImage={user.avatar}  
          email={user.email} 
          firstName={user.first_name} 
          lastName={user.last_name} 
          id={user.id} 
        />
        </StyledGridItem>))) : (
          <StyledGridItem xs={12} item>
           <NothingFound>No Profile found</NothingFound>
          </StyledGridItem>
        );

    return (
       <Fragment>
        <Navbar valueSearch={searchValue} onChangeSearch={handleFilter}/> 
         <StyledGridContainer container spacing={0}>
            {profiles.length > 0 ? users : (
              <StyledGridItem xs={12} item>
                <NothingFound>
                  <CircularProgress thickness={2} size={50}/>
                </NothingFound>
              </StyledGridItem>)}
         </StyledGridContainer>
        </Fragment>
    );
}

const mapStateToProps = (state)=>({
  data: state.data,
});

const MapActionsToProp={
  getUsers,
  
}

export default connect(mapStateToProps, MapActionsToProp)(Home);

