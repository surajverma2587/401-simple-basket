import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Banner = ({ title, subTitle }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 5,
        margin: 5,
        border: "1px solid black",
      }}
    >
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h2" gutterBottom>
        {subTitle}
      </Typography>
    </Box>
  );
};
