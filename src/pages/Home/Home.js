import React, { Fragment, useReducer, useEffect, useState, useMemo, useRef } from 'react';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledGridContainer, StyledGridItem, NothingFound } from './styles';
import {connect} from 'react-redux';
import { getUsers, updateUsers } from '../../redux/actions/dataActions';

const Home = ({ data:{ currentUsers, weekdays }, getUsers, updateUsers }) => {

    const fetchUsers = getUsers;
    const addUsers = updateUsers;

    const [profiles, setProfiles] = useState([]);
    const [showProfiles, setShowProfiles] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const isMounted = useRef(true);

   
    useEffect(() => {
      if (currentUsers.length < 1) {
        fetchUsers();
      }
      
    }, [fetchUsers]);

    useEffect(() => {
        setShowProfiles(currentUsers);
        setProfiles(currentUsers);
        if (currentUsers.length > 0 && currentUsers.length < 10) {
           addUsers(2);
        }
        
        return () => isMounted.current = false;
    }, [isMounted, currentUsers, addUsers]);

    
      const ourUsers = useMemo(() => {
        if(searchValue.length === 0 && profiles.length > 0) {
          return profiles;
        }

        if(searchValue.length > 0 && profiles.length > 0) {

          const searchValueToLowerCase = searchValue.trim().toLowerCase();
            const filteredProfiles = showProfiles.filter((item) => {
                  const name = item.first_name + item.last_name;
                  if (
                    (item.first_name.trim().toLowerCase().includes(searchValueToLowerCase) &&
                    item.last_name.trim().toLowerCase().includes(searchValueToLowerCase)) || 
                    item.first_name.trim().toLowerCase().includes(searchValueToLowerCase) || 
                  item.last_name.trim().toLowerCase().includes(searchValueToLowerCase)
                  ) {
                    return true;
                  }
                  return false;
                })
    
            return filteredProfiles;

        }

        return profiles;
      }, [searchValue, profiles, showProfiles]);

  
      const handleFilter = (event) => {
        setSearchValue(event.currentTarget.value);
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
  updateUsers,
  
}

export default connect(mapStateToProps, MapActionsToProp)(Home);

