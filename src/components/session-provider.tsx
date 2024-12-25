'use client'
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";
 
type Props = {
  session?: Session | null;
  children: ReactNode;
};
 
const AuthSession = ({ session, children }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
 
export default AuthSession;