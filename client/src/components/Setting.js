import React from "react";
import "../scss/components/Setting.css";
import Setting_content1 from "./Setting-content1";
const Setting = () => {
  return (
    <div className="setting">
      <h1>Setting</h1>
      <div className="setting-chosen">
        <Setting_content1 title="Active Status" />
        <Setting_content1 />
        <Setting_content1 title="Message Sounds" />
        <Setting_content1 />
        <Setting_content1 title="Popup Message" />
        <Setting_content1 title="Do not disturb" />
      </div>
    </div>
  );
};

export default Setting;
