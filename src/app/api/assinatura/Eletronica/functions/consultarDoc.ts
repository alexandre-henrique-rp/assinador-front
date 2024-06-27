import axios from "axios"



async function ConsultarDoc(uuid: string, userId: number) {
    try {
        const urlConsulta = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs?filters[uuid][$eq]=${uuid}&populate=%2A`;
        const request = await axios({
            method: "GET",
            url: urlConsulta,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
        })

        const [retornoApi] = request.data.data

        const retorno = {
            id: retornoApi.id,
            pertenceDoc: retornoApi.attributes.user.data.id == userId,
            attributes: {
                ...retornoApi.attributes
            }
        }

        return retorno
    } catch (error: any) {
        console.error(error)
        return error
    }
}

export default ConsultarDoc