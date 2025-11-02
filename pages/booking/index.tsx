import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const BookingPage = () => {
  const router = useRouter();
  const { propertyId } = router.query;
  
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!propertyId) return;
      
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const bookingDetails = {
    propertyName: property?.name || "Loading...",
    price: property?.price || 0,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    image: property?.image || "https://example.com/property.jpg",
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center py-12">
          <p className="text-lg text-gray-600">Loading booking details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <BookingForm propertyId={Number(propertyId) || undefined} />
          <CancellationPolicy />
        </div>
        <div>
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
