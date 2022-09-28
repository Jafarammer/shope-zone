import React from "react";
// organism
import CardAddress from "../components/organism/CardAddress";
// MUI
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

function Checkout() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ minHeight: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography variant="h4" fontWeight="bold" mb={5}>
              Checkout
            </Typography>
            <Typography fontWeight="bold">Shipping Adress</Typography>
            <CardAddress />

            <Card
              variant="outlined"
              sx={{
                width: 720,
                height: 126,
                padding: 1,
                marginTop: 2,
                boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
              }}
            >
              <CardContent>
                <List dense sx={{ width: "100%" }}>
                  <ListItem
                    secondaryAction={
                      <Typography edge="end" fontWeight="bold">
                        $ 20.0
                      </Typography>
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src="/img/jas.png"
                          sx={{ width: 103, height: 69 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ marginLeft: 3 }}
                        primary="Mens formal suit - Black"
                        secondary={
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="caption"
                            color="GrayText"
                          >
                            Zalora Cloth
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                width: 720,
                height: 126,
                padding: 1,
                marginTop: 2,
                boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
              }}
            >
              <CardContent>
                <List dense sx={{ width: "100%" }}>
                  <ListItem
                    secondaryAction={
                      <Typography edge="end" fontWeight="bold">
                        $ 20.0
                      </Typography>
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src="/img/mensJacket.png"
                          sx={{ width: 103, height: 69 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ marginLeft: 3 }}
                        primary="Men's Jacket jeans"
                        secondary={
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="caption"
                            color="GrayText"
                          >
                            Zalora Cloth
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card
              variant="outlined"
              sx={{
                width: "370px",
                height: "auto",
                padding: 1,
                marginTop: 15,
                boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
              }}
            >
              <CardContent>
                <Typography fontWeight="bold" mb={3}>
                  Shopping summary
                </Typography>
                <List sx={{ width: "100%" }}>
                  <ListItem
                    secondaryAction={
                      <Typography fontWeight="bold">$ 40.0</Typography>
                    }
                    disablePadding
                  >
                    <ListItemText primary="Order" sx={{ color: "GrayText" }} />
                  </ListItem>
                  <ListItem
                    secondaryAction={
                      <Typography fontWeight="bold">$ 5.0</Typography>
                    }
                    disablePadding
                    sx={{ marginBottom: 3 }}
                  >
                    <ListItemText
                      primary="Delivery"
                      sx={{ color: "GrayText" }}
                    />
                  </ListItem>
                  <hr />
                  <ListItem
                    secondaryAction={
                      <Typography fontWeight="bold" color="secondary">
                        $ 45.0
                      </Typography>
                    }
                    disablePadding
                    sx={{ marginBottom: 3 }}
                  >
                    <Typography fontWeight="bold" mt={3}>
                      Shopping summary
                    </Typography>
                  </ListItem>
                </List>

                <Button variant="contained" fullWidth color="secondary">
                  Select payment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Checkout;
