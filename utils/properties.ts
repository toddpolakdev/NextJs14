import { Property } from "@/types/properties";

export async function getProperties(): Promise<Property[] | undefined> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
