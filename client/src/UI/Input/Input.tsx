import "./Input.css";
import { TextField } from "@mui/material";

interface TProps {
  register: any;
  idValue: string;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle: string;
  widthStyle: string;
  editValue?: any;
}

const Input = ({
  register,
  idValue,
  labelValue,
  borderRadiusStyle,
  heightStyle,
  widthStyle,
  editValue,
}: TProps) => {
  return (
    <TextField
      value={editValue ? editValue : ""}
      InputLabelProps={{
        shrink: editValue ? true : false, // Отключает плавающее поведение
      }}
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
