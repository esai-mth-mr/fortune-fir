//userdata
export interface UserDataType{
    name: string,
    email: string,
    gender: string,
    current_round: number,
    job: string,
    lastmonthstory: number,
    accountStatus: boolean,
}
//userstory
export interface UserModalDataType{
    username: string,
    useremail: string,
    lastmonthstory: string
}

//payment data
export interface PaymentDataType{
    totalamount: number;
    stripeamount: number;
    paypalamount: number;
}

//select data
export interface SelectDataType{
    open: boolean,
    select: string | number,
    name: string,
    handleClose: () => void,
    handleOpen: () => void,
    handleChange: () => void,
}

export interface PaginationDataType{
    currentPage: number,
    handlePageChange: () => void,
}

export interface SearchDataType{
    search: string | number,
    handleSearchChange: () => void,
    name: string
}

//modal props

export interface AdminModalProps{
    modaldata: UserModalDataType;
    handleclose: () => void;
}

export interface AdminPayModalProps{
    paydata: PaymentDataType;
    handlepayclose: () => void;
}

export interface AdminUserTableProps{
    // usertabledata: UserDataType[];
    // onRowClick: (row: UserDataType) => void;
    // onPayClick: (row: PaymentDataType) => void;
    onhandleAdmin: () => void;
}


