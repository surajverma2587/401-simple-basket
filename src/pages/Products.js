import Stack from "@mui/material/Stack";
import { Banner } from "../components/Banner";
import { Product } from "../components/Product";

const products = [
  {
    id: "1",
    label: "Shoes",
    price: 25,
    displayPrice: "£25.00",
  },
  {
    id: "2",
    label: "Laptop",
    price: 100,
    displayPrice: "£100.00",
  },
  {
    id: "3",
    label: "Bag",
    price: 20,
    displayPrice: "£20.00",
  },
];

export const Products = () => {
  return (
    <div>
      <Banner title="Products" subTitle="Select your products to buy" />
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Stack>
    </div>
  );
};
