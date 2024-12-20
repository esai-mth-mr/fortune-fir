export interface ICustomJwtPayload {
    userId: string,
    exp: number;
    iat: number
}