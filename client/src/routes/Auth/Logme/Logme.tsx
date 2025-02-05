import { Form } from "../../../UI/Form/Form";
import "./Logme.css";
// RTQ
const Logme: React.FC = () => {

  const handleLogMe = () => {
    console.log(`ds`);
  };

  return (
    <>
      <Form
        classname="logme__form"
        input={[
          {
            name: "email",
            type: "number",
            placeholder: "Введите email",
            classname: "logme__input",
          },
          {
            name: "email",
            classname: `logme__input`,
            type: "password",
            placeholder: "Введите пароль",
          },
        ]}
        btnSubmitText="Войти"
        onsubmit={handleLogMe}
      ></Form>
    </>
  );
};
export default Logme;
