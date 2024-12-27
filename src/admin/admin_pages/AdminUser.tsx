// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@src/admin/admin_style/AdminUser.scss";

import Modal from '@mui/material/Modal';

// import { UserDataType } from "../admin_types";
// import { UserModalDataType } from "../admin_types";
// import { PaymentDataType } from "../admin_types";

// import AdminUserModal from "../admin_common/AdminUserModal";
import AdminUserTable from "../admin_components/AdminUserTable";
import AdminPaymentTable from "../admin_components/AdminPaymentTable";
import { Box } from "@mui/material";
// import AdminPaymentModal from "../admin_common/AdminPaymentModal";

function AdminUser() {
    // const [userdata, setUserData] = useState<UserDataType[]>([]);
    // const [usermodaldata, setUserModalData] = useState<UserModalDataType>();
    // const [userpaymodaldata, setUserPayModalData] = useState<PaymentDataType>();
    // const [open, setOpen] = useState(false);
    // const [payopen, setPayOpen] = useState(false);
    // const handleClose = () => setOpen(false);
    // const handlePayClose = () => setPayOpen(false);

    // const handleRowClick = (row: UserDataType) => {
    //     setUserModalData({
    //         username: row.name,
    //         useremail: row.email,
    //         lastmonthstory: row.lastmonthstory
    //     });
    //     setOpen(true);
    // };

    // const handlePayClick = (row: PaymentDataType) => {
    //     setUserPayModalData({
    //         totalamount: row.totalamount,
    //         stripeamount: row.stripeamount,
    //         paypalamount: row.paypalamount
    //     });
    //     setPayOpen(true);
    // }

    const navigate = useNavigate();



    const handleAdmin = () => {
        navigate(`/account/admin/Admin`);
    };

    return (
        <div className="admin">
            <div className="admin_userdata_content">
                <Modal
                    className="admin_user_table"
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '98%',
                        height: '98%',
                        bgcolor: 'background.paper',
                        p: 1, cursor: 'pointer',
                    }}>
                        <AdminUserTable
                            // usertabledata={userDataRows}
                            // onRowClick={handleRowClick}
                            // onPayClick={handlePayClick}
                            onhandleAdmin={handleAdmin} />
                        <AdminPaymentTable />
                    </Box>
                </Modal>
                {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AdminUserModal
                        modaldata={usermodaldata!}
                        handleclose={handleClose}
                    />
                </Modal> */}

                {/* <Modal
                    open={payopen}
                    onClose={handlePayClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AdminPaymentModal
                        paydata={userpaymodaldata!}
                        handlepayclose={handlePayClose}
                    />
                </Modal> */}
            </div>
        </div>
    )
}

export default AdminUser;