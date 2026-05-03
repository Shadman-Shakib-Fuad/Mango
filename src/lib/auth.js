import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./db";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      const client = await clientPromise;
      const db = client.db("mango");

      const exist = await db.collection("users").findOne({
        email: user.email,
      });

      if (!exist) {
        await db.collection("users").insertOne(user);
      }

      return true;
    },
  },
};