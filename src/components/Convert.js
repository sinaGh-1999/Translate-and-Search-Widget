import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
          },
        }
      );
      console.log(response);
      setTranslatedText(response.data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [text, language]);
  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;
