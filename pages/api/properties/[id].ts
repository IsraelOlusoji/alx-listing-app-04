// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

type Data = PropertyProps | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "GET") {
    const { id } = req.query;

    const property = PROPERTYLISTINGSAMPLE.find(
      (p) => p.id === Number(id)
    );

    if (!property) {
      res.status(404).json({ error: "Property not found" });
      return;
    }

    res.status(200).json(property);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

