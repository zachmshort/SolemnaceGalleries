import prisma from "@/lib/prisma";
import Fuse from "fuse.js";

interface ILocation {
  type: "Point";
  coordinates: [number, number];
}

export interface IfigurinesParams {
  lat?: string;
  lng?: string;
  category?: string;
  location?: ILocation;
  q?: string;
  subCategory?: string;
  radius?: string;
  description?: string;
}

export default async function Getfigurines(
  params: IfigurinesParams,
  page: number,
  perPage: number
) {
  try {
    const { lat, lng, radius, q } = params;

    let query: any = {};

    let figurines = await prisma.figurine.findMany({
      where: query,
    });

    if (q) {
      const fuseOptions = {
        keys: ["name", "faction"],
        threshold: 0.3,
      };
      const fuse = new Fuse(figurines, fuseOptions);
      const results = fuse.search(q);
      figurines = results.map((result: any) => result.item);
    }

    const totalItems = figurines.length;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedFigurines = figurines.slice(startIndex, endIndex);

    const safefigurines = paginatedFigurines.map((figurine) => ({
      ...figurine,
    }));

    return { figurines: safefigurines, totalItems };
  } catch (error: any) {
    throw new Error(error);
  }
}
