import { FC } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface IPasswordFieldProps extends IFieldProps {}

const PasswordField: FC<IPasswordFieldProps> = ({ labelText, className, placeholder, includeLabel, id }) => {
  return (
    <>
      {includeLabel && <label htmlFor={id}>{labelText}</label>}
      <input className={className} id={id} type="password" placeholder={placeholder} />
    </>
  );
};

export default PasswordField;
