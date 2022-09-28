import React from "react";
// molecules
import ColorFilter from "../molecules/ColorFilter";
import SizeFilter from "../molecules/SizeFilter";
import CategoryFilter from "../molecules/CategoryFilter";
import BrandFilter from "../molecules/BrandFilter";
// MUI
import { Box, Typography } from "@mui/material";

function DialogFilter() {
  return (
    <Box>
      <Typography variant="h6">Color</Typography>
      <ColorFilter />
      <hr />
      <Typography variant="h6" mt={3}>
        Size
      </Typography>
      <SizeFilter />
      <hr />
      <Typography variant="h6" mt={3} mb={2}>
        Category
      </Typography>
      <CategoryFilter />
      <hr />
      <Typography variant="h6" mt={3}>
        Brand
      </Typography>
      <BrandFilter />
    </Box>
  );
}

export default DialogFilter;
