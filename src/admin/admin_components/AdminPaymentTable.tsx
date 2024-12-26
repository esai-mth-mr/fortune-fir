import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AdminSelect from "../admin_common/AdminSelect";
import { useState } from "react";
import AdminPagination from "../admin_common/AdminPagination";
import AdminSearch from "../admin_common/AdminSearch";

function AdminPaymentTable() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState<string | number>('10');
    const [search, setSearch] = useState<string | number>('10');


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelect(event.target.value as number);
        console.log("select1111",event.target.value as number);
      };

    const handlePageChange = (
            event: React.ChangeEvent<unknown>,
            value: number
        ) => {
            setCurrentPage(value);
            console.log("currentPage", currentPage);
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
                top: '50%', left: '75%',
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
                <div className="admin_table_title"
                    style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}
                >Pay Data</div>
                <div className="adminPayTotal" style={{display: 'flex', width: '100%', margin: '1% 0 1% 0', fontFamily: 'Poppins'}}>
                    {[
                        {
                            provider: "Total", amount: 1
                        },
                        {
                            provider: "Strip", amount: 1
                        },
                        {
                            provider: "Paypal", amount: 1
                        },
                        {
                            provider: "Crypto", amount: 1
                        }].map((item:{provider: string, amount: number}, index)=>(
                        <div className="adminPayTotalCol" style={{display: 'flex', width: '25%'}}>
                            <div className="adminPayTotalColrow" style={{width: '50%'}}>{item.provider}</div>
                            <div className="adminPayTotalColrow" style={{width: '50%'}}>{item.amount}</div>
                        </div>
                    ))}
                    {/* <div className="adminPayTotalCol" style={{display: 'flex', width: '25%'}}>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>Total Amount:</div>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>1</div>
                    </div>
                    <div className="adminPayTotalCol" style={{display: 'flex', width: '25%'}}>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>Stripe Amount:</div>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>1</div>
                    </div>
                    <div className="adminPayTotalCol" style={{display: 'flex', width: '25%'}}>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>Paypal Amount:</div>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>1</div>
                    </div>
                    <div className="adminPayTotalCol" style={{display: 'flex', width: '25%'}}>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>Cryto Amount:</div>
                        <div className="adminPayTotalColrow" style={{width: '50%'}}>1</div>
                    </div> */}
                </div>
                <div style={{ overflow: 'auto', height: '80%' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 150 }} aria-label="simple table">
                            <TableHead>
                                <TableRow key={"nav"}>
                                    <TableCell>No</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Stripe</TableCell>
                                    <TableCell align="right">Paypal</TableCell>
                                    <TableCell align="right">Crypto</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ overflow: 'auto' }}>

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
                    name = "paymentdata"
                    handleChange={handleChange}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                />
            </Box>
        </div>
    )
}

export default AdminPaymentTable;