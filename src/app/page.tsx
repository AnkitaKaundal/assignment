"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    redirect("/home");
  }, []);
  return <h1 className="text-3xl font-bold underline"></h1>;
}
