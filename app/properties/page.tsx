import * as React from "react";
import Link from "next/link";

export interface IPropertiesPageProps {}

export default function PropertiesPage(props: IPropertiesPageProps) {
  return (
    <div>
      <h1 className="text-3xl">Properties</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}
