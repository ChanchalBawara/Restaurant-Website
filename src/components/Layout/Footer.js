import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Box
        sx={{
          my: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& svg": {
            fontSize: "40px",
            cursor: "pointer",
            mx: 2,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "goldenrod",
              transform: "scale(1.1)",
            },
          },
        }}
      >
        {/* Icons */}
        <a href="https://www.instagram.com/your_instagram_account/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/your_twitter_account/" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/your_github_account/" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.youtube.com/channel/your_youtube_channel" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon />
        </a>
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
        }}
      >
        &copy; {new Date().getFullYear()} All Rights Reserved | Chanchal Online Meal
      </Typography>
    </Box>
  );
};

export default Footer;
