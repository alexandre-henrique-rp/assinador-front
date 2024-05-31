import { NextRequest, NextResponse } from "next/server";
import SeaaionProviderFunction from "./constants/session_provaider";
import { checkIsPublicRoute } from "./functions/check-is public-route";


export default function middleware(req : NextRequest, res: NextResponse) {
    // let session = await SeaaionProviderFunction()
    // (async () => {
    //     session = await SeaaionProviderFunction()
    // })()
    // console.log("🚀 ~ middleware ~ session:", session)
    const session = req.cookies.get('next-auth.session-token')?.value;
    console.log("🚀 ~ middleware ~ expire:", session)
    const { pathname } = req.nextUrl;
    console.log("🚀 ~ middleware ~ pathname:", pathname)
    const ispublic = checkIsPublicRoute(pathname)
    console.log("🚀 ~ middleware ~ ispublic:", ispublic)

    if (!session) {
        if(ispublic) {
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/login', req.url))
    }
    if (session) {
        if (ispublic) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }
}

export const config = {
    matcher: [
      "/assinantes/:path*",
      "/enviar-documentos/:path*",
      "/verificador/:path*",
      "/assinar",
      "/login",
      "/register",
      "/reset-password",
      "/termos/uso",
      "/termos/privacidade",
      "/"
    ]
  };