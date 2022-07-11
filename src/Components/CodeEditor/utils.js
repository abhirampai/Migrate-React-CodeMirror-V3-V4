import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { cpp } from "@codemirror/lang-cpp";
import { StreamLanguage } from "@codemirror/language";
import { go } from "@codemirror/legacy-modes/mode/go";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { shell } from "@codemirror/legacy-modes/mode/shell";

import { r } from "@codemirror/legacy-modes/mode/r";

export const mapLanguages = (value) => {
  const mappedLanguages = {
    JavaScript: javascript,
    Python: python,
    Java: java,
    Rust: rust,
    C: cpp,
    "C++": cpp,
    Go: () => StreamLanguage.define(go),
    Ruby: () => StreamLanguage.define(ruby),
    R: () => StreamLanguage.define(r),
    Bash: () => StreamLanguage.define(shell)
  };
  return mappedLanguages[value];
};

export const handleIndentTab = (cm) => {
  const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
  cm.replaceSelection(spaces);
};

export const jdoodleLanguagesMap = (value, version = 0) => {
  const python = version === 3 ? "python3" : "python2";

  const versionIndex = value === "Python" ? "4" : "3";

  const languages = {
    JavaScript: { language: "nodejs", versionIndex },
    Python: { language: python, versionIndex },
    Java: { language: "java", versionIndex },
    Rust: { language: "rust", versionIndex },
    C: { language: "c", versionIndex },
    "C++": { language: "cpp", versionIndex },
    Go: { language: "go", versionIndex },
    Ruby: { language: "ruby", versionIndex },
    Bash: { language: "bash", versionIndex }
  };

  return languages[value];
};
