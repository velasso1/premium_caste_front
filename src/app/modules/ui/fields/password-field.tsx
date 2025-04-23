import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface IPasswordFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {}

const PasswordField: FC<IPasswordFieldProps> = ({ labelText, customId, ref, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={customId}>{labelText}</label>}
      <input
        className={props.className}
        id={customId}
        type="password"
        ref={ref}
        placeholder={props.placeholder}
        {...props}
      />
    </>
  );
};

export default PasswordField;
