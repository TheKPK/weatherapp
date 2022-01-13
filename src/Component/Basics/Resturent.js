import React from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

// write a uniqe list for the
const uniqueList = [...new Set(Menu.map((item) => item.category)), "all"];
console.log(uniqueList);

const Resturent = () => {
  const [menu, setMenu] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);

  const filterItem = (seletedCategory) => {
    if (seletedCategory === "all") {
      setMenu(Menu);
      return;
    }

    const updateValue = Menu.filter(
      (item) => item.category === seletedCategory
    );
    setMenu(updateValue);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menu={menu} />
    </>
  );
};

export default Resturent;
