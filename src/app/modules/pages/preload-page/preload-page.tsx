import { FC } from "react";

import premiumcast from "../../../assets/images/premium-cast-text.png";
import logo from "../../../assets/images/logo2.png";

const PreloadPage: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25vh 0 0 0",
      }}
    >
      <img src={logo} alt="" style={{ width: "350px" }} />
      <img
        src={premiumcast}
        alt=""
        style={{ width: "800px", margin: "-220px" }}
      />
      <div
        className="button"
        style={{
          margin: "100px 0 0 0",
          textTransform: "uppercase",
          border: "1px solid #FF5000",
          borderRadius: "20px",
          padding: "10px 20px",
          backgroundColor: "rgba(206, 69, 0, 0.2)",
        }}
      >
        преобразить автомобиль
      </div>
    </div>
  );
};

export default PreloadPage;
