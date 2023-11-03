import Stack from "@mui/material/Stack";
import { Banner } from "../components/Banner";
import { useApp } from "../context/AppProvider";
import { Product } from "../components/Product";

export const Checkout = () => {
  const { state } = useApp();

  return (
    <div>
      <Banner title="Checkout" subTitle="View or edit your basket" />
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        {state?.basket?.map((product) => {
          return (
            <Product key={crypto.randomUUID()} product={product} showDelete />
          );
        })}
      </Stack>
    </div>
  );
};
