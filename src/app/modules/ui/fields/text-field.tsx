import { FC } from "react";

import { IFieldProps } from "../../../types/fields-types";

interface ITextFieldProps extends IFieldProps {}

const TextField: FC<ITextFieldProps> = ({ labelText, placeholder, includeLabel, className, id }) => {
  return (
    <>
      {includeLabel && <label htmlFor={id}>{labelText}</label>}
      <input className={className} id={id} type="text" placeholder={placeholder} />
    </>
  );
};

export default TextField;
