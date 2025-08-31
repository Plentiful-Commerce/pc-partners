"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.replace("/marketing-seo/"); // add slash if you use trailingSlash
  }, []);
  return (
    <p>
      Redirecting to <a href="/marketing-seo/">/marketing-seo</a>…
    </p>
  );
}
