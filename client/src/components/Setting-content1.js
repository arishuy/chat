import React from "react";

const Setting_content1 = (props) => {
  const [isClick, setClick] = React.useState(false);
  const onButton = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#2FE620",
    border: "1px solid #2FE620",
  };
  const offButton = {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(0, 0, 0, 0.3)",
  };
  const handleClick = () => {
    setClick(!isClick);
  };
  return (
    <div>
      <div className="setting-content">
        <span>{props.title}</span>
        <div className="setting-label">
          <label style={isClick ? onButton : offButton} class="label">
            <input type="checkbox" class="label__input" onClick={handleClick} />
            <div class="label__circle"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Setting_content1;
