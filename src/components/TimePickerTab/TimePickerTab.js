import React, { Fragment, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { 
    PickerTab, 
    TextContainer, 
    ModalContent, 
    ConfirmButton, 
    ContentDialog, 
    CancelButton,
    DisabledPickerTab
} from './styles';
import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const TimePickerTab = ({ text, availability, userId, time, schedule, handleUpdate }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (id, time, schedule) => {
      schedule.dates.forEach((event) => {
         if(event.time === time ){
            event.availability = false;
         };
      });
      handleUpdate(id, schedule);
    };

    const tab = availability ? (
       <PickerTab onClick={handleOpen} disabled>
         <TextContainer>{text}</TextContainer> 
       </PickerTab>
       ) : (
        <DisabledPickerTab/>
       )

    // remember to disable PickerTab and use onclick to prevent selection of unavailable dates
    return (
        <Fragment>
             {tab}
            <Dialog 
              open={open} 
              onClose={()=>{
                handleClose()
              }}
              aria-labelledby="time confirmation"
              aria-describedby="confirmation modal"
              >
              <ContentDialog>
                <ModalContent>
                <span>confirm time selected</span>
                <h2>{text}:00</h2>
                </ModalContent>
              </ContentDialog>
              <DialogActions>
               <CancelButton 
                variant="outlined" 
                color="primary" 
                onClick={() => {
                    handleClose();
                }}>
                Cancel
                </CancelButton>
               <ConfirmButton 
                 variant="outlined"
                 onClick={() => {
                    handleClose();
                    handleSubmit(userId, time, schedule);
                }}  
                >
                 Confirm
                </ConfirmButton>
              </DialogActions>
            </Dialog>
        </Fragment>
    );
}
 
TimePickerTab.propTypes = {};
 
export default memo(TimePickerTab);