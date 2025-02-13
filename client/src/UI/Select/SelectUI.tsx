import React, { useEffect } from "react";
import "./SelectUI.css";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import { Controller, UseFormSetValue } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OrganizationScheme } from "../../API/services/organizations/OrganizationScheme";

interface TData {
  id: number;
  title: string;
}

interface TProps {
  control: any;
  nameValue: keyof OrganizationScheme;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle?: string;
  widthStyle: string;
  data: TData[];
  editValue?: any;
  setValue?: UseFormSetValue<OrganizationScheme>; // используем тип из react-hook-form
}

const SelectUI = ({
  control,
  nameValue,
  labelValue,
  borderRadiusStyle,
  widthStyle,
  data,
  editValue,
  setValue,
}: TProps) => {
  useEffect(() => {
    if (editValue !== undefined) {
      setValue(nameValue as keyof OrganizationScheme, editValue);
    }
  }, [editValue, nameValue, setValue]);

  return (
    <Box width={widthStyle}>
      <Controller
        name={nameValue}
        control={control}
        defaultValue={editValue || ""}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="terCode-label">{labelValue}</InputLabel>
            <Select
              {...field}
              value={field.value || ""}
              id={nameValue}
              labelId={`${nameValue}-label`}
              label={labelValue}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: borderRadiusStyle,
                },
              }}
            >
              {data.map((e) => {
                return <MenuItem value={e.title}>{e.title}</MenuItem>;
              })}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default SelectUI;
