import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faCamera,
  faEllipsisV,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
          <FontAwesomeIcon icon={faPaperclip} className="icon" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faImage} className="icon" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
