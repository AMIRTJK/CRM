import React from "react";
import "./FileList.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const FileList = () => {
	return (
		<div className="file-list">
			<div className="file-list__info">
				<PictureAsPdfIcon />
				<p className="file-list__info-title">Иктибос.pdf</p>
			</div>
			<IconButton>
				<DeleteIcon />
			</IconButton>
		</div>
	);
};

export default FileList;
