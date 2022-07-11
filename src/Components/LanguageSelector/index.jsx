import Select from "react-select";
import { LANGUAGE_OPTIONS } from "./constants";

const LanguageSelector = ({ setSelectedLanguage }) => {
  return (
    <div className="flex">
      <Select
        isSearchable
        name="languages"
        placeholder="Select a Language"
        className="basic-single w-full"
        classNamePrefix="select"
        defaultValue={LANGUAGE_OPTIONS[0]}
        options={LANGUAGE_OPTIONS}
        onChange={(selectedOption) => setSelectedLanguage(selectedOption)}
      />
    </div>
  );
};

export default LanguageSelector;
