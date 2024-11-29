import { useState, useEffect } from "react";
import "./clock.styles.css";

export const Separator = () => {
  return (
    <div className="separator-container">
      <div className="separator" />
      <div className="separator" />
    </div>
  );
};

export const SegmentsDigit = ({ segments }: { segments: number[] }) => {
  return (
    <div className="digit-container">
      {segments[0] && <div className="digit-top" />}
      {segments[1] && <div className="digit-right-top" />}
      {segments[2] && <div className="digit-middle" />}
      {segments[3] && <div className="digit-right-bottom" />}
      {segments[4] && <div className="digit-bottom" />}
      {segments[5] && <div className="digit-left-bottom" />}
      {segments[6] && <div className="digit-left-top" />}
    </div>
  );
};

export const Digit = ({ number }: { number: string }) => {
  switch (number) {
    case "1":
      return <SegmentsDigit segments={[0, 1, 0, 1, 0]} />;
    case "2":
      return <SegmentsDigit segments={[1, 1, 1, 0, 1, 1]} />;
    case "3":
      return <SegmentsDigit segments={[1, 1, 1, 1, 1]} />;
    case "4":
      return <SegmentsDigit segments={[0, 1, 1, 1, 0, 0, 1]} />;
    case "5":
      return <SegmentsDigit segments={[1, 0, 1, 1, 1, 0, 1]} />;
    case "6":
      return <SegmentsDigit segments={[1, 0, 1, 1, 1, 1, 1]} />;
    case "7":
      return <SegmentsDigit segments={[1, 1, 0, 1]} />;
    case "8":
      return <SegmentsDigit segments={[1, 1, 1, 1, 1, 1, 1]} />;
    case "9":
      return <SegmentsDigit segments={[1, 1, 1, 1, 1, 0, 1]} />;
    default:
      return <SegmentsDigit segments={[1, 1, 0, 1, 1, 1, 1]} />;
  }
};

const getTimeString = (): string[] => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];
};

export default function Clock() {
  const [time, setTime] = useState<string[]>([]);

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      setTime(getTimeString());
      // console.log("time", getTimeString())
    }, 1000);
    return () => window.clearInterval(intervalID);
  }, []);

  return (
    <div className="clock">
      {time.length && (
        <>
          <Digit number={time[0]} />
          <Digit number={time[1]} />
          <Separator />
          <Digit number={time[2]} />
          <Digit number={time[3]} />
          <Separator />
          <Digit number={time[4]} />
          <Digit number={time[5]} />
        </>
      )}
    </div>
  );
}
