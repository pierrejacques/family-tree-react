export interface PersonInfo {
    hobbies?: string[];
    address?: string;
    email?: string;
    phone?: string;
    site?: string;
}

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    bornOn: string;
    deadOn: string;
    isMale: boolean;
    fellow: string;
    father: string;
    mother: string;
    offsprings: string[];
    info: PersonInfo;
}

export interface Persons {
    [id: string]: Person;
}

export interface PersonSelections {
    me: string;
    current: string;
}

export interface PersonData {
    persons: Persons;
    selections: PersonSelections;
}
