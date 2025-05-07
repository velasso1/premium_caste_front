import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";
import { FieldErrors } from "react-hook-form";

interface ITextFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
  // error: FieldErrors;
}

const TextField: FC<ITextFieldProps> = ({ labelText, id, type, ref, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        className={props.className}
        id={id}
        ref={ref}
        type={type}
        placeholder={props.className}
        {...props}
        autoComplete="off"
      />
    </>
  );
};

export default TextField;
