import { FC } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface ITextFieldProps extends IFieldProps {
  type: "text" | "email";
}

const TextField: FC<ITextFieldProps> = ({ labelText, placeholder, className, id, type }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={className} id={id} type={type} placeholder={placeholder} />
    </>
  );
};

export default TextField;
