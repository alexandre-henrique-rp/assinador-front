interface UserRequest {}
interface UserRequestMim {
    id: Number;
    attributes: {
        username: String;
        email: String;
        provider: String;
        confirmed: Boolean;
        blocked: Boolean;
        nome: String;
        whatsapp: String;
        uuid: String;
        Rg_number: String;
        cnh_number: String;
        cep: String;
        cidade: String;
        endereco: String;
        estado: String;
        bairro: String;
        numero: String;
        complemento: String;
        genero: String;
        escolaridade: String;
        data_de_nascimento: String;
        avatar: String;
        createdAt: String | Date;
        updatedAt: String | Date;
    };
}
