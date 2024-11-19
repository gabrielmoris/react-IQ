/**
 * React component that displays a block of text.
 * It allows users to expand or collapse the text based on a specified maximum line limit.
 * When the text exceeds the maximum lines, a "Show more" button appears,
 * allowing users to view the full text. When expanded, a "Show less" button appears.
 *
 * Props:
 * - text (string): The content to display.
 * - maxLines (number): The maximum number of lines to display by default.
 */

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
   * useEffect to monitor changes in the container's size and content overflow.
   * It checks if the content exceeds the specified height and updates the state accordingly.
   * A ResizeObserver is used to dynamically track changes in container size,
   * ensuring that overflow detection remains accurate when the component resizes.
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
