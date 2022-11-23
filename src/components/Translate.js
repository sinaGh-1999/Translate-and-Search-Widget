import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Convert from "./Convert.js";

const options = [
  {
    label: "Persian",
    value: "fa",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "French",
    value: "fr",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select A Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
