import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useApp } from "../context/AppProvider";

export const NavBar = () => {
  const { state } = useApp();
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
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "white" }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate("/products")}
              sx={{ my: 2, color: "white" }}
            >
              Products
            </Button>
          </Box>

          <Box>
            <IconButton
              onClick={() => navigate("/checkout")}
              sx={{ my: 2, color: "white" }}
            >
              <Badge badgeContent={state?.basket?.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
