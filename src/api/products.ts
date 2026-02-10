import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  const res = await axios.get<Product[]>(`${BASE_URL}/products`);
  return res.data;
};

export const getProductById = async (id: string) => {
  const res = await axios.get<Product>(`${BASE_URL}/products/${id}`);
  return res.data;
};

