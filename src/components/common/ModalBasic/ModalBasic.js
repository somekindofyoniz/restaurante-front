import React from 'react';
import './ModalBasic.scss';
//import { Modal } from 'semantic-ui-react'
import { Box, Modal } from '@mui/material';

export function ModalBasic(props) {
    const {show, size, title, children, onClose} = props;
    //console.log(props)
    return (
        <Modal
            open={show}
            onClose={onClose}
            //size={size}
        >
            <Box className={'modal-custom'}>
                {title && <h2>{title}</h2>}
                {children}
            </Box>
            {/*<Modal.Content className='modal-basic__content'><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2><h2>smkdmasadmasdka</h2></Modal.Content>*/}
        </Modal>
    );
};

ModalBasic.defaultProps = {
    size: "tiny",
    centered: true
};
