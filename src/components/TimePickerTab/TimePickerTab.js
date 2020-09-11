import React, { Fragment, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { 
    PickerTab, 
    TextContainer, 
    ModalContent, 
    ConfirmButton, 
    ContentDialog, 
    CancelButton 
} from './styles';
import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const TimePickerTab = ({ text }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // remember to disable PickerTab and use onclick to prevent selection of unavailable dates
    return (
        <Fragment>
            <PickerTab onClick={handleOpen}>
              <TextContainer>
               {text}
              </TextContainer> 
            </PickerTab>
            <Dialog 
              open={open} 
              onClose={()=>{
                handleClose()
              }}
              aria-labelledby="time confirmation"
              aria-describedby="confirmation modal">
              <ContentDialog>
                <ModalContent>
                confirm time selected
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