import React from "react";
import "./UserCard.css";
import { Avatar, Button } from "@mui/material";
import { UserCardsScheme } from "../../../API/data/userCards";

interface TProps {
  data: UserCardsScheme;
}

const UserCard = ({ data }: TProps) => {
  return (
    <div className="user-card">
      <div className="content">
        <Avatar
          src={data?.image}
          sx={{ minWidth: "150px", minHeight: "150px" }}
        />
        <p className="title">{data?.name}</p>
        <p className="desc">{data?.role}</p>
        <div className="modules-info">
          <Button variant="outlined">Карточка образцов подписей</Button>
          <Button variant="outlined">Корреспонденция</Button>
          <Button className="more-modules-info" variant="contained">
            +3
          </Button>
        </div>
        <Button className="view-profile" variant="text">
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
