interface User {
    name: string;
    surname: string;
    fullName: string;
    login: string;
    password: string;
    birthDate: string;
};

interface CreatedUser {
    id: number;
    name: string;
    surname: string;
    fullName: string;
    birthDate: string;
}

export {
    User,
    CreatedUser,
}