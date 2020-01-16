import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

export default class MyForm extends Form {
  plugins() {
    return {
      dvr: dvr(validatorjs)
    };
  }

  setup() {
    return {
      fields: [
        {
          name: "email",
          label: "Email",
          placeholder: "Insert Email",
          rules: "required|email|string|between:5,25",
          value: "s.jobs@apple.com"
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Insert Password",
          rules: "required|string|between:5,25"
        },
        {
          name: "passwordConfirm",
          label: "Password Confirmation",
          placeholder: "Confirm Password",
          rules: "required|string|same:password"
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        alert("Form is valid! Send the request here.");
        // get field values
        console.log("Form Values!", form.values());
      },
      onError(form) {
        alert("Form has errors!");
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}
