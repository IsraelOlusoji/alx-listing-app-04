import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { PropertyProps } from "@/interfaces";
import { Star } from "lucide-react";
import ReviewSection from "@/components/property/ReviewSection";

const PropertyDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center py-12">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center py-12">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center py-12">
          <p className="text-lg text-gray-600">Property not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header with Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-gray-600 hover:text-gray-900 transition-colors"
      >
        ← Back to listings
      </button>

      {/* Property Image */}
      <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8 bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <div className="absolute top-6 left-6 bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-lg z-10">
            {property.discount}% OFF
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Title and Rating */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <span>{property.address.state}, {property.address.city}</span>
              <span>•</span>
              <span>{property.address.country}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold text-gray-900">
                {property.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {property.category.map((cat, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Amenities Section */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What this place offers</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🛏️</span>
                <div>
                  <p className="font-semibold">Bedrooms</p>
                  <p className="text-gray-600">{property.offers.bed} bed{property.offers.bed !== "1" ? "s" : ""}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚿</span>
                <div>
                  <p className="font-semibold">Bathrooms</p>
                  <p className="text-gray-600">{property.offers.shower} shower{property.offers.shower !== "1" ? "s" : ""}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-semibold">Guests</p>
                  <p className="text-gray-600">Up to {property.offers.occupants} guests</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <p className="text-gray-700">
              {property.address.state}, {property.address.city}, {property.address.country}
            </p>
          </div>

          {/* Reviews Section */}
          {property.id && <ReviewSection propertyId={property.id} />}
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 border border-gray-200 rounded-2xl p-6 bg-white shadow-lg">
            <div className="mb-4">
              <div className="text-3xl font-bold text-gray-900">
                ${property.price.toLocaleString()}
                <span className="text-lg font-normal text-gray-500"> / night</span>
              </div>
            </div>
            <button
              onClick={() => router.push(`/booking?propertyId=${property.id}`)}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Reserve
            </button>
            <p className="text-sm text-center text-gray-600">
              You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

