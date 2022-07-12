import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { keymap } from "@codemirror/view";
import { sublime } from "@uiw/codemirror-theme-sublime";

import { mapLanguages } from "./utils";

const CodeEditor = ({ selectedLanguage, value, onChange }) => {
  const [toggleHeight, setToggleHeight] = useState(false);

  const handleIndentTab = (cm) => {
    const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
    cm.replaceSelection(spaces);
  };

  const extensions = [
    keymap.of([handleIndentTab]),
    mapLanguages(selectedLanguage)()
  ];

  const editorHeight = "calc(100vh - 160px)";

  const editorHeightSmall = "50vh";

  return (
    <>
      <CodeMirror
        value={value}
        extensions={extensions}
        theme={sublime}
        onChange={(instance) => onChange(instance)}
        height={toggleHeight ? editorHeightSmall : editorHeight}
      />
    </>
  );
};

export default CodeEditor;
