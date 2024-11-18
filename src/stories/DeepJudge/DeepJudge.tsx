import React, { useRef, useState, memo } from "react";

interface ExpandableTextProps {
  text: string;
  maxLines: number;
}

export const ExpandableTextContainer = memo(({ text, maxLines }: ExpandableTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  /** Styles for the main container. */
  const containerStyle: React.CSSProperties = {
    position: "relative",
  };

  /** Styles for the text container. */
  const textContainerStyle: React.CSSProperties = {
    textAlign: "justify",
    transition: "max-height 300ms ease-out, opacity 300ms ease-out",
    ...(isExpanded
      ? null
      : {
          display: "-webkit-box",
          WebkitLineClamp: maxLines, // Limits the contents of a block to the specified number of lines.
          WebkitBoxOrient: "vertical", // Element lays out its contents vertically.
          overflow: "hidden",
        }),
  };

  /** Styles for the expand/collapse button. */
  const buttonStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "right",
    paddingTop: "8px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#9ca3af",
    transition: "color 200ms ease",
    outline: "none",
  };

  /**
   * Handles the mouse enter / Leave events for the button.
   * @param {React.MouseEvent<HTMLButtonElement>} e - The mouse event.
   */
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.color = "#000000";
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.color = "#9ca3af";
  };

  /**
   * Toggles the expanded state of the text.
   */
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section style={containerStyle}>
      <div ref={containerRef} style={textContainerStyle}>
        {text}
      </div>

      <button onClick={toggleExpand} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} style={buttonStyle} aria-expanded={isExpanded}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </section>
  );
});
