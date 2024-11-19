import React, { useRef, useState, memo, useEffect } from "react";

interface ExpandableTextProps {
  text: string;
  maxLines: number;
}

export const ExpandableTextContainer = memo(({ text, maxLines }: ExpandableTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  /**
   * Checks and tracks whether content within a container overflows its specified height
   *
   * @description
   * This effect monitors the container's content and determines if it exceeds the specified height.
   * It uses ResizeObserver to dynamically track changes in container size and content overflow.
   */

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;
      const element = containerRef.current;
      const isContentOverflowing = element.scrollHeight > element.clientHeight;
      setIsOverflowing(isContentOverflowing);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow); // Will call checkOverflow(); when the size of the container changes
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [text, maxLines]);

  /** Styles for the main container. */
  const containerStyle: React.CSSProperties = {
    position: "relative",
  };

  /** Styles for the text container. */
  const textContainerStyle: React.CSSProperties = {
    textAlign: "justify",
    transition: "max-height 300ms ease-out, opacity 300ms ease-out",
    display: isExpanded ? "block" : "-webkit-box",
    WebkitLineClamp: isExpanded ? "none" : maxLines,
    WebkitBoxOrient: "vertical",
    overflow: isExpanded ? "visible" : "hidden",
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
   * Handles the mouse enter / leave events for the button.
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
      {(isOverflowing || isExpanded) && (
        <button
          onClick={toggleExpand}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          style={buttonStyle}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
});
