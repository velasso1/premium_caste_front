import { FC } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface INumberFieldProps extends IFieldProps {}

const NumberField: FC<INumberFieldProps> = ({ labelText, placeholder, id, className }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={className} id={id} type="number" placeholder={placeholder} />
    </>
  );
};

export default NumberField;
