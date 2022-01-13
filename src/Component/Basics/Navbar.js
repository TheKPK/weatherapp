import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {menuList.map((item) => {
          return (
            <button
              className="btn-group__item"
              onClick={() => {
                filterItem(item);
              }}
            >
              {item}
            </button>
          );
        })}{" "}
        {/* <button className="btn btn-primary">{item}</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
