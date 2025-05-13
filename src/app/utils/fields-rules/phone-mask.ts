import type { MaskitoOptions } from "@maskito/core";

export const PHONE_MASK: MaskitoOptions = {
  mask: ["+", "7", " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/],
};
