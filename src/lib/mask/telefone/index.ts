export const MaskTelefone = (telefone: any): string => {
    // Remove letras e caracteres especiais
    // const numeros: string = telefone.replace(/\D/g, "");
    const numeros: string = telefone.replace(/[^\d]/g, "");
    console.log("🚀 ~ MaskTelefone ~ numeros:", numeros)

    // // Verifica se o número de caracteres é maior que 11
    // if (numeros.length > 11) {
    //     return "Número inválido. Máximo de 11 dígitos permitido.";
    // }

    // // Verifica se o número de caracteres é menor que 10
    // if (numeros.length < 10) {
    //     return "Número inválido. Mínimo de 10 dígitos necessário.";
    // }

    // Formata o número de telefone com base no comprimento
    if (numeros.length === 11) {
        // Formato (99) 9 9999-9999
        return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 3)} ${numeros.slice(3, 7)}-${numeros.slice(7)}`;
    } else if (numeros.length === 10) {
        // Formato (99) 9999-9999
        return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    }

    // Retorna vazio se não houver nada
    return "";
};
