import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const EditableField = ({
  label,
  value,
  onChange,
  isEditing,
  toggleEditing,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
      padding: "8px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      transition: "background-color 0.3s ease", // Transizione per il colore di sfondo
      "&:hover": {
        backgroundColor: "#e0e0e0", // Colore di sfondo al passaggio del mouse
      },
    }}
  >
    <TextField
      label={label}
      value={value}
      variant={isEditing ? "outlined" : "standard"}
      size="small"
      sx={{ flexGrow: 1 }}
      onChange={isEditing ? (e) => onChange(e.target.value) : undefined}
      slotProps={{
        readOnly: !isEditing,
      }}
    />
    <IconButton
      aria-label="edit"
      color="primary"
      onClick={toggleEditing}
      sx={{
        marginLeft: "8px",
        transition: "transform 0.3s ease", // Transizione per il pulsante
        "&:hover": {
          transform: "scale(1.1)", // Ingrandimento del pulsante al passaggio del mouse
        },
      }}
    >
      {isEditing ? <SendIcon /> : <EditIcon />}
    </IconButton>
  </Box>
);

function PraticalExperience() {
  const [nomeCompagnia, setNomeCompagnia] = useState("");
  const [boolNomeCompagnia, setBoolNomeCompagnia] = useState(false);

  const [posizione, setPosizione] = useState("");
  const [boolPosizione, setBoolPosizione] = useState(false);

  const [responsabilita, setResponsabilita] = useState("");
  const [boolResponsabilita, setBoolResponsabilita] = useState(false);

  const [tempo, setTempo] = useState("");
  const [boolTempo, setBoolTempo] = useState(false);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "24px",
        borderRadius: "12px",
        width: "100%",
        margin: "auto",
        transition: "box-shadow 0.3s ease", // Transizione per l'ombra del Paper
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Ombra più intensa al passaggio del mouse
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "24px", textAlign: "center" }}
      >
        Esperienza Lavorativa
      </Typography>

      <EditableField
        label="Nome della Compagnia"
        value={nomeCompagnia}
        onChange={setNomeCompagnia}
        isEditing={!boolNomeCompagnia}
        toggleEditing={() => setBoolNomeCompagnia(!boolNomeCompagnia)}
      />

      <EditableField
        label="Posizione Lavorativa"
        value={posizione}
        onChange={setPosizione}
        isEditing={!boolPosizione}
        toggleEditing={() => setBoolPosizione(!boolPosizione)}
      />

      <EditableField
        label="Responsabilità principali del tuo lavoro"
        value={responsabilita}
        onChange={setResponsabilita}
        isEditing={!boolResponsabilita}
        toggleEditing={() => setBoolResponsabilita(!boolResponsabilita)}
      />

      <EditableField
        label="Periodo di lavoro"
        value={tempo}
        onChange={setTempo}
        isEditing={!boolTempo}
        toggleEditing={() => setBoolTempo(!boolTempo)}
      />
    </Paper>
  );
}

export default PraticalExperience;
