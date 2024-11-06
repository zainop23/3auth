import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define authentication options
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials) {
        return { id: "user1" }; // Example user
      },
    }),
  ],
};

// Create the handler
const authHandler = NextAuth(authOptions);

// Export the handler
export default authHandler;
