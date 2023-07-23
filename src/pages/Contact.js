import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 6,margin:"auto",padding:"30px", maxWidth: "85%", textAlign:"center" }}>
        <Typography variant="h4" gutterBottom>
          Get in Touch With Us
        </Typography>
        <Typography variant="body1">
          If you have any questions, suggestions, or want to make a reservation,
          please feel free to contact us using the details below. Our friendly
          support team is ready to assist you.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "85%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin:"auto"
        }}
      >

        <Box
          sx={{
            maxWidth: "400px",
            mx: "auto",
            // padding:"10px"
            marginTop:"10px"
          }}
        >
          <Typography variant="h5" gutterBottom>
            Contact Form
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            // gap: "30px",
            maxWidth: "400px",
            mx: "auto",
            // padding:"10px"
            marginTop:"10px"
          }}
        >
          <TableContainer component={Paper}>
          <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    colSpan={2}
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon
                      sx={{ color: "red", fontSize: "1.5rem", mr: 1 }}
                    />
                    Customer Support
                  </TableCell>
                  <TableCell>
                    <CallIcon
                      sx={{ color: "green", fontSize: "1.5rem", mr: 1 }}
                    />
                    Phone: 961 7862 100
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon
                      sx={{ color: "skyblue", fontSize: "1.5rem", mr: 1 }}
                    />
                    Email Support
                  </TableCell>
                  <TableCell>
                    <MailIcon
                      sx={{ color: "skyblue", fontSize: "1.5rem", mr: 1 }}
                    />
                    Email: aahar@gmail.com
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box sx={{ my: 5, mx: "auto", maxWidth: "800px", textAlign: "center", padding: "15px" }}>
        <Typography variant="h5" gutterBottom>
          Our Location
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-71.0606421!3d42.3600962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0DCsDQzJzEwLjQiTiA3McKwMjInMjQuMyJX!5e0!3m2!1sen!2sus!4v1563297462483!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          title="Our Location"
        ></iframe>
      </Box>
    </Layout>
  );
};

export default Contact;
