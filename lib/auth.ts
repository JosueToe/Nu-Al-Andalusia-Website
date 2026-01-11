import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // In production, you should hash passwords and check against a database
        // For now, using environment variables for demo purposes
        const validUsername = process.env.VOLUNTEER_USERNAME || "volunteer";
        const validPassword = process.env.VOLUNTEER_PASSWORD || "password123";

        if (
          credentials?.username === validUsername &&
          credentials?.password === validPassword
        ) {
          return {
            id: "1",
            name: "Volunteer",
            email: "volunteer@nualandalusia.com",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/volunteer/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours - session will be refreshed daily
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
};


