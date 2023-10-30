import Image from "next/image";
import styles from "./header.module.scss";
import { albertusFont } from "../bio/bio-post";
import Link from "next/link";
import Title from "../utils/title";

function Header({
  includeBanner = true,
  dark = false,
  subheader,
}: {
  includeBanner?: boolean;
  dark?: boolean;
  subheader?: string;
}) {
  const scale: number = 0.8;
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/">
          <h1 className={`${albertusFont.className} ${dark && styles.dark}`}>
            {process.env.NEXT_PUBLIC_LEADNAME}
          </h1>
        </Link>

        {includeBanner && (
          <Image
            src="/images/headline.png"
            alt="design, development & architecture"
            width={1005 * scale}
            height={119 * scale}
            className={styles.banner}
          />
        )}
        <div className={styles.subHeader}>
          {subheader && <Title>{subheader}</Title>}
        </div>
      </div>
    </header>
  );
}

export default Header;
