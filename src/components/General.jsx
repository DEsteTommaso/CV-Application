import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
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
      sx={{
        flexGrow: 1,
        transition: "background-color 0.3s ease, border-color 0.3s ease", // Transizioni per il campo di testo
        "&.Mui-focused": {
          backgroundColor: "#ffffff", // Colore di sfondo quando il campo è in focus
          borderColor: "#1976d2", // Colore del bordo quando il campo è in focus
        },
      }}
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

function General() {
  const [nome, setNome] = useState("");
  const [boolNome, setBoolNome] = useState(false);

  const [cognome, setCognome] = useState("");
  const [boolCognome, setBoolCognome] = useState(false);

  const [email, setEmail] = useState("");
  const [boolEmail, setBoolEmail] = useState(false);

  const [numero, setNumero] = useState("");
  const [boolNumero, setBoolNumero] = useState(false);

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1, marginRight: "32px" }}>
          <EditableField
            label="Nome"
            value={nome}
            onChange={setNome}
            isEditing={!boolNome}
            toggleEditing={() => setBoolNome(!boolNome)}
          />
          <EditableField
            label="Cognome"
            value={cognome}
            onChange={setCognome}
            isEditing={!boolCognome}
            toggleEditing={() => setBoolCognome(!boolCognome)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ marginBottom: "8px" }}>
            Foto Profilo
          </Typography>
          <Avatar
            src="/broken-image.jpg"
            sx={{
              height: "100px",
              width: "100px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              transition: "box-shadow 0.3s ease", // Transizione per l'ombra dell'Avatar
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Ombra più intensa al passaggio del mouse
              },
            }}
          />
        </Box>
      </Box>
      <EditableField
        label="Email"
        value={email}
        onChange={setEmail}
        isEditing={!boolEmail}
        toggleEditing={() => setBoolEmail(!boolEmail)}
      />
      <EditableField
        label="Numero Telefono"
        value={numero}
        onChange={setNumero}
        isEditing={!boolNumero}
        toggleEditing={() => setBoolNumero(!boolNumero)}
      />
    </Paper>
  );
}

export default General;