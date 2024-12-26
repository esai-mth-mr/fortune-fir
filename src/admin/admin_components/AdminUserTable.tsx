import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { AdminUserTableProps, UserDataType } from "../admin_types";
import Pagination from "@mui/material/Pagination";
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import AdminSelect from "../admin_common/AdminSelect";
import AdminPagination from "../admin_common/AdminPagination";
import AdminSearch from "../admin_common/AdminSearch";

// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function AdminUserTable(props: AdminUserTableProps) {
    const userDataRows: UserDataType[] = [
        { name: 'superdragon', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: false },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3, accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
        { name: 'kk', email: 'kk@example.com', gender: 'female', current_round: 2, job: 'developer', lastmonthstory: 3,accountStatus: true },
    ];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [select, setSelect] = useState<string | number>('10');
    const [search, setSearch] = useState<string | number>('10');
    const [open, setOpen] = useState(false);

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSelect(event.target.value as number);
      console.log("select",event.target.value as number);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const handleSearchChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSearch(event.target.value as number);
        console.log("age",event.target.value as number);
    };

    return (
        <div>
            <Box sx={{
                position: 'absolute',
                top: '50%', left: '25%',
                transform: 'translate(-50%, -50%)',
                width: '49%',
                height: '98%',
                bgcolor: 'background.paper',
                p: 1, cursor: 'pointer',
            }}>
                <AdminSearch
                    search={search}
                    name="userdata"
                    handleSearchChange={handleSearchChange}
                />
               
                <ArrowCircleLeftIcon onClick={props.onhandleAdmin} sx={{ position: "absolute", cursor: "pointer", left: "1%", top: "1%", width: "45px !important", height: "45px !important" }}
                />
                <div className="admin_table_title"
                    style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}
                >User Data</div>
                <div style={{ overflow: 'auto', height: '85%' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 150 }} aria-label="simple table">
                            <TableHead>
                                <TableRow key={"nav"}>
                                    <TableCell>No</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Current Round</TableCell>
                                    <TableCell align="right">Job</TableCell>
                                    <TableCell align="right">Last<br></br> Month</TableCell>
                                    <TableCell align="right">Account<br></br>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ overflow: 'auto' }}>
                                {userDataRows.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                                    >
                                        <TableCell  scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell  align="right">{row.name}</TableCell>
                                        <TableCell  align="right">{row.email}</TableCell>
                                        <TableCell  align="right">{row.gender}</TableCell>
                                        <TableCell  align="right">{row.current_round}</TableCell>
                                        <TableCell  align="right">{row.job}</TableCell>
                                        <TableCell align="right">{row.lastmonthstory}</TableCell>
                                        <TableCell align="right">{row.accountStatus}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <AdminPagination
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />                
                
                <AdminSelect
                    open = {open}
                    select={select}
                    name = "userdata"
                    handleChange={handleChange}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                />
            </Box>
        </div>
    )
}

export default AdminUserTable;
