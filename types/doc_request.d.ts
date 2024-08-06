interface DocRequestGeral {
    data: {
        id: 1;
        attributes: {
            nome: String;
            version: Number;
            status: Boolean;
            uuid: String;
            assinatura: DocRequestAssinatura;
            createdAt: String | Date;
            updatedAt: String | Date;
            publishedAt: String | Date;
            doc: { data: FileRequestMin };
            user: { data: UserRequestMim };
            sub_clientes: { data: any[] };
        };
    };
}

interface DocRequestAssinatura { 
    assinantes: DocRequestAssinaturaObj[]; 
    testemunhas: DocRequestAssinaturaObj[] 
} 

interface DocRequestAssinaturaObj { 
    id: Number;
    nome: String;
    email: String;
    cpf: String;
    DateAss: String;
    status: String;
    ip: String;
    tag: String;
} 


interface DocRequestInfo {}

interface DocRequestInfoMin {
    docId: String;
    userId: Number;
    user: any;
    ip: String;
    filename: String;
}
