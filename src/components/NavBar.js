import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { md: "row", sm: "column", xs: "column" },
            justifyContent: { md: "space-between" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
            }}
          >
            <Button
              // onClick event navigate to home
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "white" }}
            >
              Home
            </Button>
            <Button
              // onClick event navigate to home
              onClick={() => navigate("/products")}
              sx={{ my: 2, color: "white" }}
            >
              Products
            </Button>
            <Button
              // onClick event navigate to home
              onClick={() => navigate("/checkout")}
              sx={{ my: 2, color: "white" }}
            >
              Checkout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
