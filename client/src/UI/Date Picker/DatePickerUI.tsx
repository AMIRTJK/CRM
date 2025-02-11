import React from "react";
import "./DatePickerUI.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface TProps {
  control: any;
  nameValue: string;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle: string;
  widthStyle: string;
  editValue: any;
}

const DatePickerUI = ({
  control,
  nameValue,
  labelValue,
  borderRadiusStyle,
  heightStyle,
  widthStyle,
  editValue,
}: TProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <Controller
          name={nameValue}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              label={labelValue}
              value={editValue ? dayjs(editValue) : field.value} // Теперь это либо объект Dayjs, либо null
              onChange={(newValue) => field.onChange(newValue)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: borderRadiusStyle,
                  height: heightStyle,
                },
                width: widthStyle,
              }}
            />
          )}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerUI;
