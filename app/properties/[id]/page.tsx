"use client";

import * as React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
import path from "path";

export interface IPropertyPageProps {}

const PropertyPage = (props: IPropertyPageProps) => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const name = searchParams.get("name");
  return (
    <div>
      PropertyPage
      <button className="bg-blue-500 p-2" onClick={() => router.push("/")}>
        Go Home {pathName}
      </button>
    </div>
  );
};

export default PropertyPage;
