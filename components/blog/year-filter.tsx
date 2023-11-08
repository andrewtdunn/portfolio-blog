import styles from "./year-filter.module.scss";
import { albertusFont } from "../bio/bio-post";
import Link from "next/link";

const YearFilter = ({
  endYear,
  startYear,
  currYear,
  callback,
}: {
  endYear: string;
  startYear: string;
  currYear?: string;
  callback: (year: string) => void;
}) => {
  const years: string[] = [];
  for (let i = parseInt(endYear); i >= parseInt(startYear); i--) {
    years.push(i.toString());
  }

  return (
    <div className={`${styles.YearFilter} ${albertusFont.className}`}>
      {years.map((year, index) => (
        <h1
          key={index}
          className={`${currYear?.toString() == year ? styles.active : ""} ${
            styles.yearButton
          }`}
          onClick={() => {
            callback(year);
          }}
        >
          {year}
        </h1>
      ))}
    </div>
  );
};

export default YearFilter;
