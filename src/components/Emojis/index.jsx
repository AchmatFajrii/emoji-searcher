// Emojis.js
import EmojiBox from "../EmojiBox";
import { useState, useEffect } from "react";

import { filterEmojis } from "../../utils/filterEmojis";

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(
      filterEmojis({
        emojisData,
        searchtext: searchText, // Ganti menjadi searchtext dengan huruf kecil
      })
    );
  }, [emojisData, searchText]);

  return (
    <div className="emojisGrid flex flex-row flex-wrap justify-start">
      {filteredEmojis.map((emoji, index) => {
        return (
          <EmojiBox key={index} title={emoji.title} symbol={emoji.symbol} />
        );
      })}
    </div>
  );
};

export default Emojis;
