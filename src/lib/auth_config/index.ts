import axios from "axios";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";



export const auth: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text", placeholder: "test@test.com" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          try {
            const dados = {
              identifier: credentials.email,
              password: credentials.password,
            };
            const res = await axios({
              url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
              method: "POST", 
              data: dados,
              headers: {
                "Content-Type": "application/json",
              },
              timeout: 5000
            });
  
            const retorno = await res.data;
            const { jwt, user } = retorno;
  
            const {
              blocked,
              username,
              nome,
              id,
              whatsapp,
              uuid,
              email,
              avatar
            } = await user;
  
            const response = {
              jwt: jwt,
              id: id,
              name: nome,
              username: username,
              email: email,
              blocked: blocked,
              whatsapp: whatsapp,
              uuid: uuid,
              avatar: avatar
            };
  
            if (!jwt || !id || !username || !email) {
              throw new Error("Usuário e senha incorreto");
              return null;
            }
            return response;
          } catch (e) {
            // console.log(e);
            return null;
          }
  
        },
      }),
    ],
    pages: {
      signIn: "/login",
      signOut: '/auth/signout',
      // error: '/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    jwt: {
      secret: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 4 * 60 * 60, // 4 hours
    },
    callbacks: {
      jwt: async ({ token, user }: { token: JWT; user: any }): Promise<any | null> => {
        const isSignIn = !!user;
  
        const actualDateInSeconds = Math.floor(Date.now() / 1000);
        const tokenExpirationInSeconds = Math.floor(4 * 60 * 60); // 4 hours
  
        if (isSignIn) {
          if (!user?.jwt || !user?.id || !user?.name || !user?.email) {
            return null;
          }
  
          token.jwt = user.jwt;
          token.id = user.id;
          token.name = user.name;
          token.username = user.username;
          token.email = user.email;
          token.blocked = user.blocked;
          token.whatsapp = user.whatsapp;
          token.uuid = user.uuid;
          token.avatar = user.avatar;
  
          token.expiration = actualDateInSeconds + tokenExpirationInSeconds;
        } else {
          if (!token?.expiration) {
            return null;
          }
        }
  
        return token as unknown as JWT;
      },
      session: async ({ session, token }: { session: any; token: JWT }): Promise<any | null> => {
        if (
            
          !token?.jwt ||
          !token?.id ||
          !token?.name ||
          !token?.email ||
          !token?.expiration
        ) {
          return null;
        }
  
        session.user = {
          id: token.id as number,
          name: token.name as string,
          email: token.email as string,
          blocked: token.blocked as boolean,
          username: token.username as string,
          whatsapp: token.whatsapp as string,
          uuid: token.uuid as string,
          avatar: token.avatar as string
        };
  
        session.token = token.jwt as string;
        return session;
      },
    },
  }