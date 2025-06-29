"use client";
import { useEffect } from "react";
import ErrorMessage from "@/components/ErrorMessage";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage message="Failed to load blog posts. Please try again." />
  );
}
