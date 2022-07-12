import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import CustomInput from "./CustomInput";
import LanguageSelector from "./LanguageSelector";
import { LANGUAGE_OPTIONS } from "./LanguageSelector/constants";
import OutputTerminal from "./OutputTerminal";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [value, setValue] = useState(selectedLanguage?.stub);
  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    setValue(selectedLanguage?.stub);
  }, [selectedLanguage]);

  return (
    <div className="flex flex-col w-full">
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <div className="editor-height mt-5">
        <CodeEditor
          selectedLanguage={selectedLanguage?.title.toLowerCase()}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex mt-5 justify-end">
        <input value="Run Code" type="button" />
      </div>
      <div className="flex flex-col mt-5">
        <label>Custom Input</label>
        <CustomInput input={input} setInput={setInput} />
      </div>
      {output && (
        <>
          <div className="flex mt-5 justify-end">
            <input
              value="Clear Ouput"
              type="button"
              onClick={() => setOutput(false)}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Output</label>
            <OutputTerminal output={output} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
