'use client'

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Brandify</Link>
        <div>
          <Link href="/brands" className="mr-4">Brands</Link>
          <Link href="/products" className="mr-4">Products</Link>
          {session ? (
            <>
              <span className="mr-4">{session.user?.name}</span>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="mr-4">Login</Link>
              <Link href="/auth/signup">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
