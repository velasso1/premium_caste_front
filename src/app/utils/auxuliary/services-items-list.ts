import vinyl from "#images/services-page-icons/vinyl-icon.png";
import salon from "#images/services-page-icons/poshiv-icon.png";
import toner from "#images/services-page-icons/toner-and-light.png";
import sound from "#images/services-page-icons/sound-icon.png";
import safety from "#images/services-page-icons/safety-icon.png";
import shumka from "#images/services-page-icons/shum-icon.png";
import detailing from "#images/services-page-icons/detailing-icon.png";
import dop from "#images/services-page-icons/dop-icon.png";
import disk from "#images/disk.png";

interface IServicesItem {
  title: string;
  iconPath: string;
}

export const SERVICES_ITEMS: readonly IServicesItem[] = [
  {
    title: "оклейка винилом",
    iconPath: vinyl,
  },
  {
    title: "ПОШИВ САЛОНОВ",
    iconPath: salon,
  },
  {
    title: "ТОНИРОВАНИЕ СТЕКОЛ И ОПТИКИ",
    iconPath: toner,
  },
  {
    title: "СВЕТОВОЙ ТЮНИНГ",
    iconPath: toner,
  },
  {
    title: "ОКЛЕЙКА ЗАЩИТНЫМИ ПЛЕНКАМИ",
    iconPath: sound,
  },
  {
    title: "УСТАНОВКА ШУМОИЗОЛЯЦИИ",
    iconPath: safety,
  },
  {
    title: "АВТОЗВУК И МУЛЬтИМЕДИя",
    iconPath: shumka,
  },
  {
    title: "ДЕТЕЙЛИНГ",
    iconPath: detailing,
  },
  {
    title: "УСТАНОВКА ДОП ОБОРУДОВАНИЯ",
    iconPath: dop,
  },
  {
    title: "ДИСКИ",
    iconPath: disk,
  },
] as const;
