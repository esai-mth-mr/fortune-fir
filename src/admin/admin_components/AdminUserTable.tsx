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
import { AdminUserTableProps } from "../admin_types";
import { MenuItem, Select, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function AdminUserTable(props: AdminUserTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [age, setAge] = useState<string | number>('10');
    const [open, setOpen] = useState(false);

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as number);
      console.log("age",event.target.value as number);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <div>
            <Box sx={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95%',
                height: '90%',
                bgcolor: 'background.paper',
                p: 4, cursor: 'pointer',
            }}>
                <ArrowCircleLeftIcon onClick={props.onhandleAdmin} sx={{ position: "absolute", cursor: "pointer", left: "3%", top: "3%", width: "45px !important", height: "45px !important" }}
                />
                <div className="admin_table_title"
                    style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}
                >User Data</div>
                <div style={{ overflow: 'auto', height: '85%' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow key={"nav"}>
                                    <TableCell>No</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Current Round</TableCell>
                                    <TableCell align="right">Job</TableCell>
                                    <TableCell align="right">AccountStatus</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ overflow: 'auto' }}>
                                {props.usertabledata.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell onClick={() => props.onRowClick(row)} scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell onClick={() => props.onRowClick(row)} align="right">{row.name}</TableCell>
                                        <TableCell onClick={() => props.onRowClick(row)} align="right">{row.email}</TableCell>
                                        <TableCell onClick={() => props.onRowClick(row)} align="right">{row.gender}</TableCell>
                                        <TableCell onClick={() => props.onRowClick(row)} align="right">{row.current_round}</TableCell>
                                        <TableCell onClick={() => props.onRowClick(row)} align="right">{row.job}</TableCell>
                                        <TableCell onClick={() => props.onPayClick(row.accountStatus)} align="right">
                                            {/* {row.accountStatus.totalamount} */}
                                            <RemoveRedEyeIcon />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Stack style={{ width: "100%", marginTop: "2%" }} spacing={1}>
                    <Pagination
                        sx={{ display: "flex", justifyContent: "center" }}
                        onChange={handlePageChange}
                        count={12}
                        page={currentPage}
                        variant="outlined"
                        boundaryCount={1}
                        size="medium"
                    />
                </Stack>
                
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                    defaultValue={10}
                    sx={{position:'absolute', bottom: '5.5%', left: '25%', height: '5%'}}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </Box>
        </div>
    )
}

export default AdminUserTable;
