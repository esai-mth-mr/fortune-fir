//userdata
export interface UserDataType{
    name: string,
    email: string,
    gender: string,
    current_round: number,
    job: string,
    accountStatus: PaymentDataType
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

export interface AdminModalProps{
    modaldata: UserModalDataType;
    handleclose: () => void;
}

export interface AdminPayModalProps{
    paydata: PaymentDataType;
    handlepayclose: () => void;
}

export interface AdminUserTableProps{
    usertabledata: UserDataType[];
    onRowClick: (row: UserDataType) => void;
    onPayClick: (row: PaymentDataType) => void;
    onhandleAdmin: () => void;
}


