import "@src/admin/admin_style/AdminUser.scss";
import Typography from '@mui/material/Typography';
import { AdminModalProps } from "../admin_types";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function AdminUserModal(props: AdminModalProps) {
    return (
        <div>
            {/* <Modal
                open={props.open}
                onClose={props.handleclose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > */}
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
                }} onClick={props.handleclose}>
                    <Typography id="modal-modal-description" sx={{ py: 0.5, display: 'flex', borderBottom: '1px solid black' }}>
                        <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ width: '25%' }}>Username</div>
                            <div style={{ width: '25%' }}>Useremail</div>
                            <div style={{ width: '50%', display: 'flex', justifyContent: 'end' }}>LastMonthStory</div>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ py: 0.5, display: 'flex', borderBottom: '1px solid black' }}>
                        <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ width: '25%' }}>{props?.modaldata.username}</div>
                            <div style={{ width: '25%' }}>{props?.modaldata.useremail}</div>
                            <div style={{ width: '50%', display: 'flex', justifyContent: 'end' }}>{props?.modaldata.lastmonthstory}</div>
                        </div>
                    </Typography>
                </Box>
            {/* </Modal> */}
        </div>
    )
}
export default AdminUserModal;