import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface ITextFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
  ref?: Ref<HTMLInputElement>;
}

const TextField: FC<ITextFieldProps> = ({ labelText, placeholderText, classNameText, id, type, ref, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={classNameText} id={id} ref={ref} type={type} placeholder={placeholderText} {...props} />
    </>
  );
};

export default TextField;
