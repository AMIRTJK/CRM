import React from "react";
import "./CreateCRM.css";
import TitleSection from "../../../UI/Title of Section/TitleSection";
import PanelControl from "../../../UI/Panel Control/PanelControl";
import { TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateCRM = () => {
  return (
    <main className="create-crm">
      <TitleSection title="Новая организация" />
      <PanelControl />
      <TitleSection title="Создание организации" />
      <section>
        <form action="">
          <TextField
            label="ИНН *"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },

              width: "48%",
            }}
          />
          <TextField
            label="Идентификатор *"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
          <TextField
            label="Название "
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
          <div className="wrapper-form-elements">
            <TextField
              label="Номер договора "
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  height: "90%",
                },

                width: "70%",
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Дата договора"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px", // Применяем border-radius к контейнеру
                      marginBottom: "5px",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <TextField
            label="Идентификатор *"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
        </form>
      </section>
    </main>
  );
};

export default CreateCRM;
