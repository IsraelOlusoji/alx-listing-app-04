// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Review = {
  id: number;
  propertyId: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

// Mock reviews data
const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    propertyId: 1,
    author: "John Doe",
    rating: 5,
    comment: "Amazing villa with breathtaking views!",
    date: "2024-01-15",
  },
  {
    id: 2,
    propertyId: 1,
    author: "Jane Smith",
    rating: 4,
    comment: "Great location and amenities. Highly recommended!",
    date: "2024-01-20",
  },
];

type Data = Review[] | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "GET") {
    const { id } = req.query;

    const reviews = MOCK_REVIEWS.filter(
      (review) => review.propertyId === Number(id)
    );

    res.status(200).json(reviews);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

