import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface ITextFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
}

const TextField: FC<ITextFieldProps> = ({ labelText, id, type, ref, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={props.className} id={id} ref={ref} type={type} placeholder={props.className} {...props} />
    </>
  );
};

export default TextField;
