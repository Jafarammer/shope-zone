import React from "react";
// MUI
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

function BrandFilter() {
  const [brand, setBrand] = React.useState("");

  const handleChange = (event) => {
    setBrand(event.target.value);
  };
  return (
    <Box>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Adidas Original, Jack & Jones, s.Oliver
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={brand}
          onChange={handleChange}
        >
          <MenuItem>Bag adidas</MenuItem>
          <MenuItem>Shoes adidas</MenuItem>
          <MenuItem>T-shirt adidas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BrandFilter;
