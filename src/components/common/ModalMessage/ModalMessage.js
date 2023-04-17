import React from 'react';
import './ModalMessage.scss';
//import { Modal } from 'semantic-ui-react'
import { Box, Modal } from '@mui/material';

export function ModalMessage(props) {
    const {show, size, title, children, onClose} = props;
    //console.log(props)
    return (
        <Modal
            open={show}
            onClose={onClose}
            size={size}
        >
            <Box className={'modal-message-custom'}>
                {title && <h3>{title}</h3>}
                {children}
            </Box>
            {/*<Modal.Content className='modal-basic__content'><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2></Modal.Content>*/}
        </Modal>
    );
};

ModalMessage.defaultProps = {
    size: "tiny",
    centered: true
};
