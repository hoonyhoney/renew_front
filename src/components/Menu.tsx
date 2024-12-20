"use client";

import styles from "@/styles/page.module.css";
import React, { type ReactElement } from "react";

export default function Menu(): ReactElement {
  // const session = useSession();

  return (
    <div className={styles.menu}>
      {/* <Link href={"/about"}>
        <h3>소개</h3>
      </Link>
      {isSession ? (
        <>
          <form onSubmit={handleSubmit}>
            <button type="submit">로그아웃</button>
          </form>
          <Link href="/mypage">마이페이지</Link>
        </>
      ) : (
        <>
          <Link href="/signin">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </>
      )} */}
    </div>
  );
}
