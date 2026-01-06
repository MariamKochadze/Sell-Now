"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navMenu.module.css"


function AuthButton() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      {session ? (
        <>
          <span>
            {session?.user?.name}
          </span>
          <button
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <span>Not signed in</span>
          <button
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}


export default function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <div className={styles.navLink}>
        <Link
          href="/"
        >
          Home
        </Link>
        <Link href="/protected">
          My Account
        </Link>
        <AuthButton />
      </div>
    </div>
  );
}