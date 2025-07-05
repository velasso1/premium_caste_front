import vinyl from "#images/services-page-icons/vinyl-icon.png";
import salon from "#images/services-page-icons/poshiv-icon.png";
import toner from "#images/services-page-icons/toner-and-light.png";
import sound from "#images/services-page-icons/sound-icon.png";
import safety from "#images/services-page-icons/safety-icon.png";
import shumka from "#images/services-page-icons/shum-icon.png";
import detailing from "#images/services-page-icons/detailing-icon.png";
import dop from "#images/services-page-icons/dop-icon.png";
import disk from "#images/disk.png";

export interface IServicesItem {
  title: string;
  serviceName: keyof typeof serviceNames;
  iconPath: string;
}

export const SERVICES_ITEMS: readonly IServicesItem[] = [
  {
    title: "оклейка винилом",
    serviceName: "vinyl",
    iconPath: vinyl,
  },
  {
    title: "ПОШИВ САЛОНОВ",
    serviceName: "sewing",
    iconPath: salon,
  },
  {
    title: "ТОНИРОВАНИЕ СТЕКОЛ И ОПТИКИ",
    serviceName: "tinting",
    iconPath: toner,
  },
  {
    title: "СВЕТОВОЙ ТЮНИНГ",
    serviceName: "light",
    iconPath: toner,
  },
  {
    title: "ОКЛЕЙКА ЗАЩИТНЫМИ ПЛЕНКАМИ",
    serviceName: "safety",
    iconPath: safety,
  },
  {
    title: "УСТАНОВКА ШУМОИЗОЛЯЦИИ",
    serviceName: "soundproofing",
    iconPath: shumka,
  },
  {
    title: "АВТОЗВУК И МУЛЬтИМЕДИя",
    serviceName: "sound",
    iconPath: sound,
  },
  {
    title: "ДЕТЕЙЛИНГ",
    serviceName: "detailing",
    iconPath: detailing,
  },
  {
    title: "УСТАНОВКА ДОП ОБОРУДОВАНИЯ",
    serviceName: "equipment",
    iconPath: dop,
  },
  {
    title: "ДИСКИ",
    serviceName: "disks",
    iconPath: disk,
  },
] as const;

// page name by service

export const serviceNames = {
  vinyl: "Оклейка винилом",
  sewing: "Пошив салонов",
  tinting: "Тонирование стекол и оптики",
  light: "Световой тюнинг",
  safety: "Оклейка защитными плёнками",
  soundproofing: "Установка шумоизоляции",
  sound: "Автозвук и мультимедиа",
  detailing: "Детейлинг",
  equipment: "Дополнительное оборудование",
  disks: "Диски",
} as const;
