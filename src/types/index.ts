export interface ICustomJwtPayload {
    userId: string,
    exp: number;
    iat: number
}

export interface IInitDataType {
    _id: string;
    name: string;
    luck: string;
    index: number;
    description: string;
    url: string;
}

export interface IModalDataType {
    name: string;
    desc: string;
}

export interface ISaveSendDataType {
    point: number;
    total_point: number;
    assets: number[];
    month: number;
}

export interface ISaveSendYearDataType {
    total_point: number;
}