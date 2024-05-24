import { uuid } from "uuidv4";


export const UpdateNotUuid = async (id: number, type: string) => {
    try {
        const subUrl = type === 'user' ? `/users/${id}` : type === 'doc'? `/docs/${id}` : `/sub-clientes/${id}`
        const request = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${subUrl}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
            },
            body: JSON.stringify({
                uuid: uuid()
            }),
            cache: 'no-store'
        });
        const response = await request.json();
        return response
    } catch (error: any) {
        throw error
    }
}