import React from "react";
import { PropertyProps } from "@/interfaces";
import { Star } from "lucide-react";

export const Card: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative">
      {property.discount && (
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          {property.discount}% OFF
        </div>
      )}
      <div className="relative w-full h-64 bg-gray-200 rounded-t-xl overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 flex space-x-1">
          {property.category.slice(0, 3).map((cat, index) => (
            <span
              key={index}
              className="text-xs bg-white bg-opacity-90 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-900 flex-1">
            {property.name}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-700">
              {property.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-2">
          {property.address.state}, {property.address.country}
        </p>
        <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
          <span className="flex items-center space-x-1">
            <span>🛏️</span>
            <span>{property.offers.bed}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>🚿</span>
            <span>{property.offers.shower}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>👥</span>
            <span>{property.offers.occupants}</span>
          </span>
        </div>
        <div className="text-sm text-gray-900 font-semibold">
          ${property.price.toLocaleString()}
          <span className="text-gray-500 font-normal"> /n</span>
        </div>
      </div>
    </div>
  );
};
