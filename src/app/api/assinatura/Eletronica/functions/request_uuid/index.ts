export const RequestUuid = async (uuid: string) => {
    try {
        const requestUUid = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs?filters[uuid][$eq]=${uuid}&populate=%2A`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );
    
        const retornoUuid = await requestUUid.json();
        const [dados] = await retornoUuid.data
        return dados
    } catch (error) {
        throw { message: "Erro na requisição de uuid", erro: error }
    }
}