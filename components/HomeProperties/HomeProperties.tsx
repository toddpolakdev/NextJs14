import * as React from "react";
// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/properties";
import { getProperties } from "@/utils/properties";
import Link from "next/link";

// export interface IHomePropertiesProps {}

// type Property = {};

// async function getProperties(): Promise<Property[] | undefined> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch properties");
//     }

//     return await res.json();
//   } catch (err) {
//     console.error(err);
//   }
// }

// const HomeProperties: React.FC<IHomePropertiesProps> = () => {
const HomeProperties: React.FC = async () => {
  const properties = await getProperties();

  const recentProperties =
    (await properties) ||
    [].sort(() => Math.random() - Math.random()).slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
