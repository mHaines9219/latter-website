import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer h-[50px] flex justify-center my-2">
      <Link href="/privacypolicy">Privacy Policy</Link>
    </div>
  );
}
