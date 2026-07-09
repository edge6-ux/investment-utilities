"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const FACEBOOK_PAGE_URL = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL?.trim() ?? "";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (node?: HTMLElement | null) => void } };
  }
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function FacebookPlaceholder() {
  return (
    <span
      aria-label="Facebook — coming soon"
      title="Facebook coming soon"
      className="facebook-widget-placeholder"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.15rem 0.55rem",
        borderRadius: "3px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        fontSize: "0.72rem",
        fontWeight: 600,
        color: "rgba(255,255,255,0.75)",
        lineHeight: 1,
        cursor: "default",
      }}
    >
      <FacebookIcon />
      <span>Follow</span>
    </span>
  );
}

export default function FacebookWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    if (sdkReady && FACEBOOK_PAGE_URL && window.FB) {
      window.FB.XFBML.parse(containerRef.current);
    }
  }, [sdkReady]);

  if (!FACEBOOK_PAGE_URL) {
    return <FacebookPlaceholder />;
  }

  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
        strategy="lazyOnload"
        onLoad={() => setSdkReady(true)}
      />
      <div ref={containerRef} className="facebook-widget flex items-center">
        <div
          className="fb-follow"
          data-href={FACEBOOK_PAGE_URL}
          data-layout="button"
          data-size="small"
          data-show-faces="false"
        />
      </div>
    </>
  );
}
