interface User {
    id: number;
    name: string;
    surname: string;
    fullName: string;
    birthDate: string;
    phoneNumber: string;
    countryCode: string;
    currencyCode: string;
    languageCode: string;
    jwt?: string;
}

export {
    User,
}