// Приводит номер телефона вида +7 (999) 999-99-99 к виду +79999999999

export const phoneNormalizer = (phone: string): string => {
  const cleaned = phone.replace(/[^\d+]/g, "");

  return cleaned.startsWith("8") ? "+7" + cleaned.slice(1) : cleaned;
};

// Приводит номер телефона вида +79999999999 к виду +7 (999) 999-99-99

export const phoneFormatter = (phone: string): string => {
  const digits = phone.replace(/\D/g, "");

  return phone.replace(/^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/, "$1 ($2) $3-$4-$5");
};
