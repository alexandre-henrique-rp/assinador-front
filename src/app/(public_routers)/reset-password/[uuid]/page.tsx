import GealResetPasswordProps from "../_components/geral/reset";


export default async function ResetPasswordPage({ params }: { params: { uuid: string } }) {
  const { uuid } = params;

const token: any = process.env.NEXT_API_TOKEN;
const url: any = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const response = await fetch(`${url}/users?filters[uuid][$eq]=${uuid}&populate=%2A`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  cache: 'no-store'
});
const [retorno] = await response.json();
console.log("🚀 ~ retorno:", retorno)

  return (
    <>
      <GealResetPasswordProps />
    </>
  );
}
