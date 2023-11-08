import styles from "./year-filter.module.scss";
import { albertusFont } from "../bio/bio-post";
import { GetStaticProps } from "next";

const YearFilter = ({
  endYear,
  startYear,
  currYear,
}: {
  endYear: string;
  startYear: string;
  currYear?: string;
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
          className={currYear?.toString() == year ? styles.active : ""}
        >
          {year}
        </h1>
      ))}
    </div>
  );
};

export default YearFilter;
