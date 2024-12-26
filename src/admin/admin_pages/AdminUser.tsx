import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@src/admin/admin_style/AdminUser.scss";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { UserDataType } from "../admin_types";
import { UserModalDataType } from "../admin_types";

import AdminUserModal from "../admin_common/AdminUserModal";
import AdminUserTable from "../admin_components/AdminUserTable";


function AdminUser() {
    // const [userdata, setUserData] = useState<UserDataType[]>([]);
    const [usermodaldata, setUserModalData] = useState<UserModalDataType>();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleRowClick = (row: UserDataType) => {
        setUserModalData({
          username: row.name,
          useremail: row.email,
          lastmonthstory: "kkkkkkkkkkkkk"
        });
        setOpen(true);
      };

    const navigate = useNavigate();

    const userDataRows: UserDataType[] = [
        { name: 'superdragon', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', accountStatus: 'paypal' },
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
                    className="admin_table"
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        height: '80%',
                        bgcolor: 'background.paper',
                        p: 4, cursor: 'pointer'
                    }}>
                        <ArrowCircleLeftIcon onClick={handleAdmin} sx={{ position: "absolute", cursor: "pointer", left: "3%", top: "3%", width: "45px !important", height: "45px !important" }}
                        />
                        <div className="admin_table_title"
                            style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}
                        >User Data</div>
                        <div style={{ overflow: 'auto', height: '95%' }}>
                            <AdminUserTable usertabledata={userDataRows} onRowClick={handleRowClick} />
                        </div>

                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default AdminUser;