// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type BookingData = {
  propertyId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  specialRequests?: string;
};

type Data = { message: string } | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    const bookingData: BookingData = req.body;

    // Validate required fields
    if (
      !bookingData.propertyId ||
      !bookingData.checkIn ||
      !bookingData.checkOut ||
      !bookingData.guests ||
      !bookingData.firstName ||
      !bookingData.lastName ||
      !bookingData.email
    ) {
      res.status(400).json({ error: "Missing required booking fields" });
      return;
    }

    // In a real application, you would save this to a database
    // For now, we'll just return a success message
    console.log("Booking received:", bookingData);

    res.status(201).json({ message: "Booking submitted successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

