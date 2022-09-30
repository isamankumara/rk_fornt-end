export type SignIParams = { email: string; password: string };
export type SignInPayload = { payload: SignIParams, type: string };
export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}