import * as React from "react";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/properties";
import { getProperties } from "@/utils/properties";
// import properties from "@/properties.json";

// export interface IPropertiesPageProps {}

// type Property = {};

// async function getProperties() {
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

// export default  function PropertiesPage(props: IPropertiesPageProps) {
// const PropertiesPage = async () => {
const PropertiesPage: React.FC = async () => {
  const properties = await getProperties();

  // Sort properties by date
  properties?.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties && properties.length === 0 ? (
          <div>No properties found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties &&
              properties.map((property: any) => (
                <PropertyCard key={property._id} property={property} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
