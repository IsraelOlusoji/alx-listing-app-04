export interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id?: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
