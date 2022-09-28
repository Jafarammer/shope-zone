import React from "react";
// MUI
import { Box, Typography } from "@mui/material";

function InformationProduct() {
  return (
    <Box>
      <Typography variant="h6">Condition</Typography>
      <Typography variant="h6" color="secondary">
        New
      </Typography>
      <Typography variant="h6" mt={5}>
        Description
      </Typography>
      <Typography variant="caption" color="GrayText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna
        rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet
        dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet
        ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a
        consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo
        vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit
        magna. Donec non magna rutrum, pellentesque augue eu, sagittis velit.
        Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel
        turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris
        vel molestie orci.
      </Typography>
    </Box>
  );
}

export default InformationProduct;
