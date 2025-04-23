import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface INumberFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {}

const NumberField: FC<INumberFieldProps> = ({ labelText, customId, ref, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={customId}>{labelText}</label>}
      <input
        className={props.className}
        id={customId}
        type="number"
        ref={ref}
        placeholder={props.placeholder}
        {...props}
      />
    </>
  );
};

export default NumberField;
