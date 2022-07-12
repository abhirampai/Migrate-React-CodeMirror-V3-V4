const OutputTerminal = ({ output }) => {
  return (
    <div className="output-terminal-bg output-terminal-height overflow-auto flex flex-col">
      <span className="padding-top-left-1 text-white">{output}</span>
    </div>
  );
};

export default OutputTerminal;
