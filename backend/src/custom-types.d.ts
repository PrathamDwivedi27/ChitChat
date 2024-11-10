interface AuthUser{
    id: number;
    email: string;
    name: string;
}

//Express ek poora complete wrapper uske andar jitne bhi types hai Request ka response ka etc
declare namespace Express{
    export interface Request{
        user?: AuthUser;
    }
}