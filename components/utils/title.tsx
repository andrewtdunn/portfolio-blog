import TitleLetter from "./title-letter";
import styles from "./title.module.scss";

type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <div className={styles.Title}>
      <h3>
        {children.split("").map((letter, i) => {
          return <TitleLetter key={i} character={letter} />;
        })}
      </h3>
    </div>
  );
};

export default Title;
