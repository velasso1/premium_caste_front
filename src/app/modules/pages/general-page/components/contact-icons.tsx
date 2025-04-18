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
        <img className="place-block__icon-image" src={d2} alt="drive2" />
      </div>
      <div className="place-block__icon">
        <img className="place-block__icon-image" src={inst} alt="instagram" />
      </div>
      <div className="place-block__icon">
        <img className="place-block__icon-image" src={teleg} alt="telegram" />
      </div>
      <div className="place-block__icon">
        <img className="place-block__icon-image" src={facebook} alt="facebook" />
      </div>
      <div className="place-block__icon">
        <img className="place-block__icon-image" src={vk} alt="vk" />
      </div>
    </div>
  );
};

export default ContactIcons;
