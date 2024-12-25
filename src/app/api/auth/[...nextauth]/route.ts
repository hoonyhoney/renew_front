import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
};
const handler = async (req, res) => {
    console.log("클라이언트 id",process.env.KAKAO_CLIENT_ID); 
    console.log("요청 메서드:", req.method);
    return NextAuth(authOptions)(req, res);
  };
  
export { handler as GET, handler as POST };