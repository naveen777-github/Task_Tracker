import React from "react";
export function Tag({ TagName, selectTag, selected }) {
  // eslint-disable-next-line react-hooks/globals
  const tagStyle = {
    HTML: { backgroundColor: "#fda821 " },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c " },
    ReactJS: { backgroundColor: "#4cdafc " },
    default: { backgroundColor: "white" },
  };

  return (
    <button
      type="button"
      onClick={() => selectTag(TagName)}
      style={selected ? tagStyle[TagName] : tagStyle.default}
    >
      {TagName}{" "}
    </button>
  );
}
