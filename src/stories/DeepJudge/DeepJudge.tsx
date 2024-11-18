import React, { useEffect, useRef, useState, memo } from "react";

interface ExpandableTextProps {
  text: string;
  maxLines: number;
}

export const ExpandableTextContainer = memo(({ text, maxLines }: ExpandableTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const isContentOverflowing = element.scrollHeight > element.clientHeight;
      setIsOverflowing(isContentOverflowing);
    };
    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow); // would call checkOverflow(); when the size of the container changes
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [text, maxLines]);

  const containerStyle: React.CSSProperties = {
    position: "relative",
  };

  const textContainerStyle: React.CSSProperties = {
    textAlign: "justify",
    transition: "max-height 300ms ease-out, opacity 300ms ease-out",
    ...(isExpanded
      ? null
      : {
          display: "-webkit-box",
          WebkitLineClamp: maxLines, // limits the contents of a block to the specified number of lines.
          WebkitBoxOrient: "vertical", // Element lays out its contents vertically.
          overflow: "hidden",
        }),
  };

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

  // Just some hover effect built with JS
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.color = "#000000";
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.color = "#9ca3af";
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div style={containerStyle}>
      <div ref={containerRef} style={textContainerStyle}>
        {text}
      </div>

      <button onClick={toggleExpand} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} style={buttonStyle} aria-expanded={isExpanded}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
});
