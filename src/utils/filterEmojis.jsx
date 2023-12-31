export const filterEmojis = ({
  emojisData,
  searchtext = "",
  maxResults = 20,
}) => {
  const filteredEmojis = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchtext.toLocaleLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchtext.toLocaleLowerCase())) {
      return true;
    }

    return false;
  });

  return filteredEmojis.splice(0, maxResults)
};
