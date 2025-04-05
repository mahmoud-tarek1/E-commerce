import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div
      style={{
        height: "50px",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div>©2025 Hexashop. All rights reserved</div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link href="http://www.facebook.com/"> {/* Fixed Facebook link */}
          <Image
            src="/facebook.png"
            alt="Facebook icon"
            width={20}
            height={20}
          />
        </Link>
        <Link href="http://www.linkedin.com/">
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            width={20}
            height={20}
          />
        </Link>
        <Link href="http://www.telegram.org/">
          <Image
            src="/telegram.png"
            alt="Telegram icon"
            width={20}
            height={20}
          />
        </Link>
        <Link href="http://www.instagram.com/">
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
