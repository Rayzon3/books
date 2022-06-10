import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "../../../database/connectDB";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
      .split(" ")
      .join("")
      .toLocaleLowerCase()
      session.user.uid = token
      return session
    }
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.JWT_SECRET
})