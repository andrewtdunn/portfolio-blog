import { useContext } from "react";
import NavigationContext from "../../store/nav-context";
import { SoundContext } from "../../store/sound-context";
import styles from "./left-nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { tapeFont } from "../layout/nametag";
import localFont from "next/font/local";

export const btnFont = localFont({
  src: "../../public/fonts/SpaceMono-Regular.ttf",
});

const LeftNav = () => {
  const navigationCtx = useContext(NavigationContext);
  const soundCtx = useContext(SoundContext);
  const router = useRouter();
  const links = [
    { label: "Archives", url: "/" },
    { label: "Bio / CV", url: "/bio" },
    { label: "Blog", url: "/blog" },
    { label: "Games", url: "/games" },
    { label: " Contact ", url: "/contact" },
  ];
  const clickHandler = (index: number) => {
    soundCtx!.buttonNoise(index);
    setTimeout(() => {
      navigationCtx.closeNav();
    }, 250);
  };
  return (
    <div className={styles.LeftNav}>
      <div className={styles.leftElevator}>
        <Image
          src="/images/side_padding.jpg"
          alt="left elevator padding"
          width={222}
          height={652}
          className={styles.leftElevatorImage}
        />
        <Image
          src="/images/side_padding.jpg"
          alt="left elevator padding"
          width={222}
          height={652}
          className={styles.leftElevatorImage2}
        />
      </div>
      <div
        className={`blackMask ${navigationCtx.leftOpen && styles.unmasked}`}
      ></div>
      <div className={styles.linkHolder}>
        <div className={styles.links}>
          {links.map((link, index) => {
            return (
              <Link href={link.url} key={index} className={styles.link}>
                {index < links.length - 1 ? (
                  <button
                    className={router.pathname === link.url ? styles.lit : ""}
                    onClick={() => clickHandler(index)}
                  >
                    <span className={btnFont.className}>
                      {link.label.toUpperCase()}
                    </span>
                  </button>
                ) : (
                  <div className={styles.contactLabel}>
                    <h1
                      className={`${tapeFont.className} ${
                        router.pathname === link.url ? styles.lit : ""
                      }`}
                      role="button"
                      onClick={() => clickHandler(index)}
                    >
                      {link.label}
                    </h1>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
