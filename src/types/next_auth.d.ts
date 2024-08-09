import 'next-auth';

declare module 'next-auth' {
    interface Session {
        token: string;
        expiration: number;
        user: {
            id: number;
            name: string;
            email: string;
            blocked: boolean;
            username: string;
            whatsapp: string;
            uuid: string;
            avatar: string;
        }
    }
}

