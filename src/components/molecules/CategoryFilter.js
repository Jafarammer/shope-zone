import React from "react";
// MUI
import { styled, Box, Grid, Paper } from "@mui/material";
// style
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "whitesmoke",
  padding: theme.spacing(1.5),
  textAlign: "center",
  color: "GrayText",
  "&:hover": { backgroundColor: "#DB3022", color: "whitesmoke" },
  cursor: "pointer",
}));
// end style

function CategoryFilter() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12} mb={3}>
        <Grid item xs={2} sm={4} md={4}>
          <Item>All</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Women</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Men</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Boys</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>Girls</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CategoryFilter;
