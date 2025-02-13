import React, { useEffect } from "react";
import "./DatePickerUI.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, UseFormSetValue } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { OrganizationScheme } from "../../API/services/organizations/OrganizationScheme";

interface TProps {
  control: any;
  nameValue: keyof OrganizationScheme;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle: string;
  widthStyle: string;
  editValue?: any;
  setValue?: UseFormSetValue<OrganizationScheme>; // используем тип из react-hook-form
}

const DatePickerUI = ({
  control,
  nameValue,
  labelValue,
  borderRadiusStyle,
  heightStyle,
  widthStyle,
  editValue,
  setValue,
}: TProps) => {
  useEffect(() => {
    if (editValue !== undefined) {
      setValue(nameValue as keyof OrganizationScheme, editValue);
    }
  }, [editValue, nameValue, setValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <Controller
          name={nameValue}
          control={control}
          defaultValue={editValue || null}
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
