import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export interface FormProps {
  classname: string;
  onclick: (e: React.MouseEvent<HTMLElement>) => void;
  onsubmit: (data) => void;
  input: {
    inpname: string;
    classname: string;
    type?: string;
    placeholder?: string;
  }[];
  btnSubmitText: string;
}

export const Form: React.FC<FormProps> = ({
  classname,
  input,
  onsubmit,
  btnSubmitText,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className={classname}>
        {input.map(({ inpname, type, placeholder, classname }) => (
          <>
            <input
              key={inpname}
              className={classname}
              type={type}
              placeholder={placeholder}
              {...register(inpname, {
                required: true,
              })}
            />
            {errors[inpname] && <small>{errors[inpname]?.message}</small>}
          </>
        ))}
        <Button onClick={() => navigate("/crm")}>
          {btnSubmitText || "Отправить"}
        </Button>
      </form>
    </>
  );
};
