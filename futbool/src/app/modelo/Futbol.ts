
    export interface Paging {
        current: number;
        total: number;
    }

    export interface Response {
        name: string;
        code: string;
        flag: string;
    }

    export interface Respuesta {
        get: string;
        parameters: any[];
        errors: any[];
        results: number;
        paging: Paging;
        response: Response[];
    }


   