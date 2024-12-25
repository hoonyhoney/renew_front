"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

export default function KakaoLogin() {
  const { data: session } = useSession();

  return (
    <>
      <button onClick={() => signIn("kakao")}>
        <a>카카오 로그인</a>
      </button>
    </>
  );
}

