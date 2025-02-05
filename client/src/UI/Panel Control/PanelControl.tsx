import React from "react";
import "./PanelControl.css";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router";

const PanelControl = () => {
  const navigate = useNavigate();

  return (
    <div className="panel-control">
      <div className="back-button">
        <Button
          onClick={() => navigate(-1)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "20px",
          }}
          variant="text"
        >
          <ArrowBackIosIcon /> <p>Назад</p>
        </Button>
      </div>
      <div className="action-buttons">
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "20px",
          }}
          variant="text"
        >
          <SaveIcon /> <p>Сохранить</p>
        </Button>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "20px",
          }}
          variant="text"
        >
          <DoneIcon /> <p>Создать</p>
        </Button>
      </div>
    </div>
  );
};

export default PanelControl;
