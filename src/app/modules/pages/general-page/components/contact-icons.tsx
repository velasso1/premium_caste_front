import { FC } from "react";

import d2 from "#images/D2.png";
import inst from "#images/mdi_instagram.png";
import teleg from "#images/mingcute_telegram-fill.png";
import facebook from "#images/icon-park-outline_facebook.png";
import vk from "#images/basil_vk-outline.png";

const ContactIcons: FC = () => {
  const contactIcons = [
    { icon: d2, link: "https://www.drive2.ru/o/premiumcaste/" },
    { icon: inst, link: "https://www.instagram.com/premiumcaste/" },
    { icon: teleg, link: "https://t.me/premiumcaste_admin" },
    { icon: facebook, link: "https://t.me/premiumcaste_admin" },
    { icon: vk, link: "https://vk.com/premiumcaste" },
  ];
  return (
    <div className="place-block__icons">
      {contactIcons.map((item) => {
        return (
          <div className="place-block__icon">
            <img
              className="place-block__icon-image"
              src={item.icon}
              alt={item.icon}
              onClick={() => window.open(item.link, "_blank")}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContactIcons;
