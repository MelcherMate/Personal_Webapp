import { useState } from "react";
import {
  FaAddressCard,
  FaComment,
  FaFolderOpen,
  FaHome,
  FaMapSigns,
} from "react-icons/fa";
import "./Menu.css";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(2); // default active is "Home"

  const menuItems = [
    { icon: <FaComment />, text: "Message" },
    { icon: <FaAddressCard />, text: "Profile" },
    { icon: <FaHome />, text: "Home" },
    { icon: <FaFolderOpen />, text: "Files" },
    { icon: <FaMapSigns />, text: "Journey" },
  ];

  return (
    <div className="navigation">
      <ul>
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={activeIndex === idx ? "active" : ""}
            onClick={() => setActiveIndex(idx)}
          >
            <a href="#">
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Menu;
