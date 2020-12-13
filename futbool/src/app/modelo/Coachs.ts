export interface Parameters {
    id: string;
}

export interface Paging {
    current: number;
    total: number;
}

export interface Birth {
    date: string;
    place: string;
    country: string;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface Team2 {
    id: number;
    name: string;
    logo: string;
}

export interface Career {
    team: Team2;
    start: string;
    end: string;
}

export interface Response {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: Birth;
    nationality: string;
    height: string;
    weight: string;
    team: Team;
    career: Career[];
}

export interface Respuesta3 {
    get: string;
    parameters: Parameters;
    errors: any[];
    results: number;
    paging: Paging;
    response: Response[];
}