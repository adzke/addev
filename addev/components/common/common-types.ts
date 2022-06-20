
// Application types 

export type Company = {
    id: number;
    company_name: string
};

export type User = {
    id: number,
    username: string,
    email: string,
    company_name: string
}

export type AuthorisationToken = string

export type AuthorisedUser = {
    user: User,
    token: AuthorisationToken
}

