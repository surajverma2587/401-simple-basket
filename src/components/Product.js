import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useApp } from "../context/AppProvider";

export const Product = ({ product }) => {
  const { dispatch } = useApp();

  const handleAddItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  return (
    <Card sx={{ minWidth: 275, m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.label}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {product.displayPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAddItem}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
