import { useEffect, useState } from "react";
import "./emojibox.css";

const EmojiBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setSelected(false)
    }, 600);

    return () => clearTimeout(timer)
  }, [selected])

  const emojiHtml = `&#${symbol.codePointAt(0)};`;
  return (
    <>
      <div
        onClick={() => {
          navigator.clipboard.writeText(symbol);
          setSelected(true)
        }}
        className={selected ? `selected emojiBox cursor-pointer bg-white shadow-lg rounded-md p-[8px] m-[4px] flex flex-col justify-center items-center flex-1 min-h-[100px] min-w-[100px]` : `emojiBox cursor-pointer bg-white shadow-lg rounded-md p-[8px] m-[4px] flex flex-col justify-center items-center flex-1 min-h-[100px] min-w-[100px]`}
      >
        <p className="emoji" dangerouslySetInnerHTML={{ __html: emojiHtml }} />
        <p className="emojiText">{selected ? 'Copied' : title}</p>
      </div>
    </>
  );
};

export default EmojiBox;
