export const baseUrl = 'https://testbackend.nc-one.com';
export const AllProducts = `${baseUrl}/image`;

export interface Product {
  id: number;
  name: string;
  price: number;
  src: string;
  className: string;
}
