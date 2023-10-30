import styles from "./blog-text.module.scss";
import Parser from "html-react-parser";

type PostTextProps = {
  text: string;
  dropCap: boolean;
  twoColumn: boolean;
};

const PostText = ({ text, dropCap, twoColumn }: PostTextProps) => {
  return (
    <div className={styles.Post}>
      <div className={`${styles.post_text} ${twoColumn && styles.two_column}`}>
        {dropCap && (
          <span className={styles.drop_cap}>{text.substring(0, 1)}</span>
        )}
        {dropCap ? Parser(text.slice(1)) : Parser(text)}
      </div>
    </div>
  );
};

export default PostText;
