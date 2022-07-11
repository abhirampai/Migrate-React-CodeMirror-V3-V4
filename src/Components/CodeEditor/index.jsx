import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { keymap } from "@codemirror/view";
import { sublime } from "@uiw/codemirror-theme-sublime";

import { handleIndentTab, jdoodleLanguagesMap, mapLanguages } from "./utils";
import { runCode } from "../../Apis/runCode";

const CodeEditor = ({ selectedLanguage, value, onChange }) => {
  const [toggleHeight, setToggleHeight] = useState(false);

  const editorHeight = "calc(100vh - 160px)";

  const editorHeightSmall = "50vh";

  const extensions = [
    keymap.of([handleIndentTab]),
    mapLanguages(selectedLanguage)()
  ];

  const runEditorCode = async (e) => {
    e.preventDefault();
    const { language, versionIndex } = jdoodleLanguagesMap(selectedLanguage, 3);
    await runCode({
      script: value,
      language,
      versionIndex
    });
  };

  return (
    <>
      <CodeMirror
        value={value}
        extensions={extensions}
        theme={sublime}
        onChange={(instance) => onChange(instance)}
        height={toggleHeight ? editorHeightSmall : editorHeight}
      />
      <div className="flex justify-between">
        <input
          type="button"
          value="Toggle Height"
          className="mt-5"
          onClick={() => setToggleHeight(!toggleHeight)}
        />
        <input
          type="button"
          value="Run Code"
          className="mt-5"
          onClick={runEditorCode}
        />
      </div>
    </>
  );
};

export default CodeEditor;
