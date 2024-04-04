import * as React from "react";
import Link from "next/link";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
}
