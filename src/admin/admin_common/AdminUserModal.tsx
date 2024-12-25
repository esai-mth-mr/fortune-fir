import "@src/admin/admin_style/AdminUser.scss";
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { UserModalDataType } from "../admin_types";

interface userm

function AdminUserModal(modaldata:UserModalDataType){
    const [usermodaldata, setUserModalData] = useState<UserModalDataType>();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{  
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 700,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            py: 4,
                            px: 8
                            }} onClick={handleClose}>
                <Typography id="modal-modal-title" sx={{borderBottom: '1px solid black'}} variant="h6" component="h2">
                    Total Amount: {usermodaldata?.totalamount}
                </Typography>
                <Typography id="modal-modal-description" sx={{ py:0.5, display: 'flex', borderBottom: '1px solid black'}}>
                    <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '25%'}}>Total Useramount</div>
                        <div style={{width: '25%'}}>Provider</div>
                        <div style={{width: '25%'}}>Username</div>
                        <div style={{width: '25%'}}>Useremail</div>
                    </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ py:0.5, display: 'flex', borderBottom: '1px solid black'}}>
                    <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '25%'}}>{usermodaldata?.totaluseramount}</div>
                        <div style={{width: '25%'}}>{usermodaldata?.provider}</div>
                        <div style={{width: '25%'}}>{usermodaldata?.username}</div>
                        <div style={{width: '25%', display: 'flex', }}>{usermodaldata?.useremail}</div>
                    </div>
                </Typography>
                
                </Box>
            </Modal>
        </div>
    )
}

export default AdminUserModal;