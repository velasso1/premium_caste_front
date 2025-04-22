import { FC, InputHTMLAttributes, Ref } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface INumberFieldProps extends IFieldProps, InputHTMLAttributes<HTMLInputElement> {}

const NumberField: FC<INumberFieldProps> = ({ labelText, placeholderText, customId, classNameText, ref, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={customId}>{labelText}</label>}
      <input className={classNameText} id={customId} type="number" ref={ref} placeholder={placeholderText} {...props} />
    </>
  );
};

export default NumberField;
