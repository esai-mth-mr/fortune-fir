import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { AdminUserTableProps } from "../admin_types";


function AdminUserTable(props: AdminUserTableProps) {
    
    return (
        <div>
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
                                onClick={() => props.onRowClick(row)}
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell scope="row">
                                    {index + 1}
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
    )
}

export default AdminUserTable;