import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
