import { useEffect } from "react";
import "./Input.css";
import { TextField } from "@mui/material";
import { OrganizationScheme } from "../../API/services/organizations/OrganizationScheme";
import { UseFormSetValue } from "react-hook-form";

interface TProps {
  register: any;
  idValue: keyof OrganizationScheme;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle: string;
  widthStyle: string;
  editValue?: any;
  setValue?: UseFormSetValue<OrganizationScheme>; // используем тип из react-hook-form
}

const Input = ({
  register,
  idValue,
  labelValue,
  borderRadiusStyle,
  heightStyle,
  widthStyle,
  editValue,
  setValue,
}: TProps) => {
  useEffect(() => {
    if (editValue !== undefined) {
      setValue(idValue as keyof OrganizationScheme, editValue);
    }
  }, [editValue, idValue, setValue]);

  return (
    <TextField
      defaultValue={editValue} // value={editValue ? editValue : ""}
      {...register(idValue)}
      id={idValue}
      label={labelValue}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadiusStyle,
          height: heightStyle,
        },

        width: widthStyle,
      }}
    />
  );
};

export default Input;
