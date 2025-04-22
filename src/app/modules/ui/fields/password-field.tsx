import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface IPasswordFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {}

const PasswordField: FC<IPasswordFieldProps> = ({
  labelText,
  classNameText,
  placeholderText,
  customId,
  ref,
  ...props
}) => {
  return (
    <>
      {labelText && <label htmlFor={customId}>{labelText}</label>}
      <input
        className={classNameText}
        id={customId}
        type="password"
        ref={ref}
        placeholder={placeholderText}
        {...props}
      />
    </>
  );
};

export default PasswordField;
