import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import LanguageSelector from "./LanguageSelector";
import { LANGUAGE_OPTIONS } from "./LanguageSelector/constants";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [value, setValue] = useState(selectedLanguage?.stub);

  useEffect(() => {
    setValue(selectedLanguage?.stub);
  }, [selectedLanguage]);

  return (
    <div className="flex flex-col w-full">
      <LanguageSelector setSelectedLanguage={setSelectedLanguage} />
      <div className="editor-height mt-5">
        <CodeEditor
          selectedLanguage={selectedLanguage?.value}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default Main;
