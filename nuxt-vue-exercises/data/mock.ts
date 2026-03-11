/*Crea un data/mock.ts para simular los datos, mínimo 3 productos */
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 5.99,
    image: "https://via.placeholder.com/150",
  },
];
