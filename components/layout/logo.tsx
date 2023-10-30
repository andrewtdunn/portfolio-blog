import Image from "next/image";
import styles from "./logo.module.scss";
import NavigationContext from "../../store/nav-context";
import { useContext } from "react";

function Logo({ home }: { home: Boolean }) {
  const navCtx = useContext(NavigationContext);
  const { openModal } = navCtx;

  const clickHandler = () => {
    openModal();
  };

  return (
    <div
      className={`${styles.logo} ${home && styles.light}`}
      onClick={clickHandler}
    >
      <Image
        src="/images/panda.png"
        alt="purple panda"
        width={130}
        height={96}
        priority
      />
    </div>
  );
}

export default Logo;
