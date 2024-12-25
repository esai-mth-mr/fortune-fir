import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@src/admin/admin_style/AdminUser.scss";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { UserDataType } from "../admin_types";
import { UserModalDataType } from "../admin_types";

import AdminUserModal from "../admin_common/AdminUserModal";

function AdminUser(){
    // const [userdata, setUserData] = useState<UserDataType[]>([]);
    const [usermodaldata, setUserModalData] = useState<UserModalDataType>();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen =() =>{
        setUserModalData({
            totalamount: 1000,
            totaluseramount: 300,
            provider: "Ethereum",
            username: "Bahubali",
            useremail: "starofmath@gmail.com"
        });
        setOpen(true);
    }
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
        navigate(`/admin/Admin`);
    };
      
    return(
        <div className="admin">
            <div className="admin_userdata_content">
                <AdminUserModal modaldata={usermodaldata}/>
            {/* <Modal
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
            </Modal> */}

                <Modal 
                    className="admin_table"
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position:'absolute', 
                        top:'50%', left:'50%', 
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        height: '80%',
                        bgcolor: 'background.paper',
                        p: 4, cursor: 'pointer'}}>
                    <ArrowCircleLeftIcon onClick={handleAdmin} sx={{position:"absolute",cursor:"pointer", left:"3%", top:"3%", width: "45px !important", height: "45px !important"}}
                    />
                    <div className="admin_table_title"
                    style={{textAlign:'center', fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold'}}
                    >User Data</div>
                    <div style={{overflow: 'auto', height: '95%'}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 400}} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>No</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Current Round</TableCell>
                                    <TableCell align="right">Job</TableCell>
                                    <TableCell align="right">AccountStatus</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody sx={{overflow:'auto'}}>
                                {userDataRows.map((row, index) => (
                                    <TableRow
                                    onClick={()=>handleOpen()}
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell scope="row">
                                        {index+1}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.gender}</TableCell>
                                    <TableCell align="right">{row.current_round}</TableCell>
                                    <TableCell align="right">{row.job}</TableCell>
                                    <TableCell align="right">{row.accountStatus}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    
                </Box>
                </Modal>
            </div>
        </div>
    )
}

export default AdminUser;