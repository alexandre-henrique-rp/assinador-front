import axios from "axios";



async function Manifesto(Assinaturas: string, ID: string, filename: string) {
  try {
    const RequestAss = await axios({
        method: "POST",
        url: `${process.env.NEXT_MANIFEST_URL}/manifesto`,
        data: {
            assinaturas: Assinaturas,
            urlConsulta: `${process.env.NEXT_PUBLIC_LINK}/singi/check/doc/${ID}`,
            baseUrl: `${process.env.NEXT_PUBLIC_LINK}/singi/check/doc/`,
            filename,
            uuid: ID,
        },
        responseType: "arraybuffer",
    });

    const pdfBuffer2 = Buffer.from(RequestAss.data);
    return pdfBuffer2
  } catch (error: any) {
    return error
  }
}

export default Manifesto