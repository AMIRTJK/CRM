import React from "react";
import "./FileList.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

interface FileListProps {
  item?: File;
  onDelete?: () => void;
}

const FileList = ({ item, onDelete }: FileListProps) => {
  const typeOfFile = item?.name?.split(".");

  const defaultFile = item?.name?.split("//");

  console.log(item);

  console.log(defaultFile);

  return (
    <div className="file-list">
      <div className="file-list__info">
        {typeOfFile && typeOfFile[1] === "pdf" ? (
          <PictureAsPdfIcon />
        ) : (
          <InsertDriveFileIcon />
        )}
        {/* <PictureAsPdfIcon /> */}
        <p className="file-list__info-title">
          {typeOfFile ? item?.name : "Документ.pdf"}
        </p>
      </div>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default FileList;
