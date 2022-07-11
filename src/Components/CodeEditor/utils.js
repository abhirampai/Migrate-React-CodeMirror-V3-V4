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
