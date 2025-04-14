"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Automatically navigate to the route when the page is loaded
    router.push("./mn/alumni1");
  }, [router]);

  return <div></div>;
}
