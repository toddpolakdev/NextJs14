// "use client";

// import * as React from "react";
// import {
//   useRouter,
//   useParams,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";
// import path from "path";

import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const PropertyPage = async ({ params }) => {
  console.log("property", Property);

  await connectDB();

  const property = await Property.findById(params.id).lean();

  console.log("property", property.images);

  console.log("property[0]", property.images[0]);

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>{property.name}</section>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

// export interface IPropertyPageProps {}

// const PropertyPage = (props: IPropertyPageProps) => {
//   const router = useRouter();
//   const { id } = useParams();
//   const searchParams = useSearchParams();
//   const pathName = usePathname();

//   const name = searchParams.get("name");
//   return (
//     <div>
//       PropertyPage
//       <button className="bg-blue-500 p-2" onClick={() => router.push("/")}>
//         Go Home {pathName}
//       </button>
//     </div>
//   );
// };

export default PropertyPage;
