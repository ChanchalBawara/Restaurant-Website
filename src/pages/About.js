import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: "80%",
          margin: "auto",
          my: 5,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Our Restaurant</Typography>
        <p>
          At Our Restaurant, we are passionate about serving delicious and
          authentic dishes from around the world. Our team of talented chefs
          creates culinary masterpieces that will tantalize your taste buds and
          leave you craving for more. Whether you are dining with friends,
          family, or having a romantic dinner, we ensure a memorable dining
          experience in a warm and welcoming atmosphere.
        </p>
        <br />
        <p>
          We take pride in sourcing the finest and freshest ingredients to
          prepare our dishes. From appetizers to desserts, each dish is
          meticulously crafted to perfection. Our menu includes a wide variety
          of options, including vegetarian and vegan dishes, to cater to every
          palate.
        </p>
        <br />
        <p>
          Besides our delightful dishes, we offer an extensive selection of
          fine wines and cocktails that complement our cuisine. Our attentive
          and friendly staff will be more than happy to assist you in choosing
          the perfect pairing for your meal.
        </p>
        <br />
        <p>
          At Our Restaurant, we value sustainability and strive to minimize
          our environmental impact. We use eco-friendly packaging and support
          local farmers and suppliers to promote sustainable practices in the
          food industry.
        </p>
        <br />
        <p>
          Our restaurant provides a cozy and elegant ambiance, making it an
          ideal spot for any occasion. Whether it's a casual lunch, a special
          celebration, or a business meeting, we have the perfect setting for
          you.
        </p>
        <br />
        <p>
          Come and experience the art of gastronomy at Our Restaurant. We look
          forward to serving you and creating unforgettable memories together.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
