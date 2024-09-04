import React from "react";
import General from "./General";
import EducationExperience from "./EducationExperience";
import PraticalExperience from "./PraticalExperience";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function BackGround() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        CV-Application
      </Typography>

      <Typography variant="h6" component="p">
        Parlaci di te
      </Typography>

      <Typography variant="body1" component="p">
        Raccontaci chi sei, come possono mettersi in contatto con te i datori di
        lavoro e qual è la tua professione.
      </Typography>

      <General />
      <EducationExperience />
      <PraticalExperience />
    </Box>
  );
}

export default BackGround;
