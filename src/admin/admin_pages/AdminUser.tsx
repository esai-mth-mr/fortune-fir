import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@src/admin/admin_style/AdminUser.scss";

import Modal from '@mui/material/Modal';

import { UserDataType } from "../admin_types";
import { UserModalDataType } from "../admin_types";
import { PaymentDataType } from "../admin_types";


import AdminUserModal from "../admin_common/AdminUserModal";
import AdminUserTable from "../admin_components/AdminUserTable";
import AdminPaymentModal from "../admin_common/AdminPaymentModal";

function AdminUser() {
    // const [userdata, setUserData] = useState<UserDataType[]>([]);
    const [usermodaldata, setUserModalData] = useState<UserModalDataType>();
    const [userpaymodaldata, setUserPayModalData] = useState<PaymentDataType>();
    const [open, setOpen] = useState(false);
    const [payopen, setPayOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handlePayClose = () => setPayOpen(false);

    const handleRowClick = (row: UserDataType) => {
        setUserModalData({
            username: row.name,
            useremail: row.email,
            lastmonthstory: row.lastmonthstory
        });
        setOpen(true);
    };

    const handlePayClick = (row: PaymentDataType) => {
        setUserPayModalData({
            totalamount: row.totalamount,
            stripeamount: row.stripeamount,
            paypalamount: row.paypalamount
        });
        setPayOpen(true);
    }

    const navigate = useNavigate();

    const userDataRows: UserDataType[] = [
        { name: 'superdragon', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome', accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 'you are welcome',accountStatus: {totalamount: 500, stripeamount: 300, paypalamount: 200} },
    ];

    const handleAdmin = () => {
        navigate(`/account/admin/Admin`);
    };

    return (
        <div className="admin">
            <div className="admin_userdata_content">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AdminUserModal
                        modaldata={usermodaldata!}
                        handleclose={handleClose}
                    />
                </Modal>

                <Modal
                    open={payopen}
                    onClose={handlePayClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AdminPaymentModal
                        paydata={userpaymodaldata!}
                        handlepayclose={handlePayClose}
                    />
                </Modal>

                <Modal
                    className="admin_table"
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <AdminUserTable
                        usertabledata={userDataRows}
                        onRowClick={handleRowClick}
                        onPayClick={handlePayClick}
                        onhandleAdmin={handleAdmin} />
                </Modal>
            </div>
        </div>
    )
}

export default AdminUser;