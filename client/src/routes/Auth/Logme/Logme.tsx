import { Form } from "../../../UI/Form/Form";
import { useMutation } from "@tanstack/react-query";
import "./Logme.css";
import { useAuth } from "../../../API/hooks/useAuth";
// RTQ
const Logme: React.FC = () => {
  const { logMe } = useAuth();
  const logMeMutation = useMutation({
    mutationFn: () => logMe(data),
    onSuccess: () => console.log(`Успешно`),
  });

  return (
    <>
      <Form
        classname="logme__form"
        input={[
          {
            name: "username",
            type: "text",
            placeholder: "Введите ИНН",
            classname: "input logme__input",
          },
          {
            name: "password",
            classname: `input logme__input`,
            type: "password",
            placeholder: "Введите пароль",
          },
        ]}
        sbtName="Войти"
        // onsubmit={handleLogMe}
        btnClassname="btn-mui logme__form-btn "
      ></Form>
    </>
  );
};
export default Logme;
