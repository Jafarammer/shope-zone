import React from "react";
// images
// import imgLogo from "../../images/Vector.svg";
// organism
import FormRegisterCustomer from "../../components/organism/FormRegisterCustomer";
import FormRegisterSeller from "../../components/organism/FormRegisterSeller";
// MUI
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Typography,
  styled,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";

// style
const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  color: "#DB3022",
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// end style

function Register() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Logo>
          <img src="/img/Vector.svg" alt="image" />
          <Typography variant="h5" mt={2} fontWeight="bold">
            Shope Zone
          </Typography>
        </Logo>
        <Typography fontWeight="bold" my={5}>
          Please sign up with your account
        </Typography>
        <Card sx={{ width: 375, height: 620 }} variant="outlined">
          <CardContent>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "center",
                }}
                m={1}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab label="Customer" {...a11yProps(0)} />
                  <Tab label="Seller" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <FormRegisterCustomer />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <FormRegisterSeller />
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Register;
