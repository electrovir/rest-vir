export enum AuthLevel {
    Required = 'required',
    Any = 'any',
    Blocked = 'blocked',
    Admin = 'admin',
}

export type CustomProps = {
    requiredAuth: AuthLevel;
};

export const customProps: CustomProps = {
    requiredAuth: AuthLevel.Any,
};
