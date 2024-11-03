import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials) {
        return { id: "user1" };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

// Export as named functions for GET and POST
export const GET = handler;
export const POST = handler;
