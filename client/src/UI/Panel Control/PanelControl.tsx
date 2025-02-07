import React from "react";
import "./PanelControl.css";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

const PanelControl = ({
	handleSubmit,
}: (e: React.MouseEventHandler) => void) => {
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
					disabled={true}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						borderRadius: "20px",
					}}
					variant="text"
				>
					<EditIcon /> <p>Редактировать</p>
				</Button>
				<Button
					onClick={handleSubmit}
					type="submit"
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
			</div>
		</div>
	);
};

export default PanelControl;
