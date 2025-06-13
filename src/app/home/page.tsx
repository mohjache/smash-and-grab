"use client";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Page() {
  return (
    <main className="container mx-auto pt-24 pb-8">
      <Authenticated>
        <h1 className="text-primary mb-8 text-center text-3xl font-bold">
          Logged In User
        </h1>
      </Authenticated>
      <Unauthenticated>
        <h1 className="text-primary mb-8 text-center text-3xl font-bold">
          Logged Out User
        </h1>
      </Unauthenticated>
    </main>
  );
}
