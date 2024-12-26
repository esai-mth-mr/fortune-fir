//userdata

export interface UserDataType{
    name: string,
    email: string,
    gender: string,
    current_round: number,
    job: string,
    accountStatus: string
}

export interface UserModalDataType{
    username: string,
    useremail: string,
    lastmonthstory: string
}


export interface AdminModalProps{
    modaldata: UserModalDataType;
    handleclose: () => void;
}


export interface AdminUserTableProps{
    usertabledata: UserDataType[];
    onRowClick: (row: UserDataType) => void;
}
//payment data