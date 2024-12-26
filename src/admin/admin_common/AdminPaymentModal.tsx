import "@src/admin/admin_style/AdminUser.scss";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AdminPayModalProps } from "../admin_types";

function AdminPaymentModal(props: AdminPayModalProps){
    return(
        <div>
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
            }} onClick={props.handlepayclose}>
                <Typography id="modal-modal-description" sx={{ py: 0.5, display: 'flex', borderBottom: '1px solid black' }}>
                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '50%' }}>Total Amount</div>
                        <div style={{ width: '50%' }}>{props.paydata.totalamount}</div>
                    </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ py: 0.5, display: 'flex', borderBottom: '1px solid black' }}>
                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '50%' }}>User Amount</div>
                        <div style={{ width: '50%' }}>Provider</div>
                    </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ py: 0.5, display: 'flex', borderBottom: '1px solid black' }}>
                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '50%' }}>{props?.paydata.paypalamount}</div>
                        <div style={{ width: '50%' }}>{props?.paydata.stripeamount}</div>
                    </div>
                </Typography>
            </Box>
        </div>
    )
}

export default AdminPaymentModal;