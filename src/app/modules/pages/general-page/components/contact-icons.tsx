import { FC } from "react";

import d2 from "#images/D2.png";
import inst from "#images/mdi_instagram.png";
import teleg from "#images/mingcute_telegram-fill.png";
import facebook from "#images/icon-park-outline_facebook.png";
import vk from "#images/basil_vk-outline.png";

const ContactIcons: FC = () => {
  return (
    <div className="place-block__icons">
      <div className="place-block__icon">
        <img src={d2} alt="" className="place-block__icon-image" />
      </div>
      <div className="place-block__icon">
        <img src={inst} alt="" className="place-block__icon-image" />
      </div>
      <div className="place-block__icon">
        <img src={teleg} alt="" className="place-block__icon-image" />
      </div>
      <div className="place-block__icon">
        <img src={facebook} alt="" className="place-block__icon-image" />
      </div>
      <div className="place-block__icon">
        <img src={vk} alt="" className="place-block__icon-image" />
      </div>
    </div>
  );
};

export default ContactIcons;
