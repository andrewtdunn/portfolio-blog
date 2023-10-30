import styles from "./right-nav.module.scss";
import Image from "next/image";
import AuthForm from "./auth-form";

const RightNav = () => {
  return (
    <div className={styles.RightNav}>
      <div className={styles.formHolder}>
        <AuthForm />
      </div>
      <div className={styles.rightElevator}>
        <Image
          src="/images/side_padding.jpg"
          width={222}
          height={652}
          alt="right elevator padding"
          className={styles.rightPadding}
          priority
        />
        <Image
          src="/images/side_padding.jpg"
          width={222}
          height={652}
          alt="right elevator padding"
          className={styles.rightElevatorImage2}
          priority
        />
      </div>
    </div>
  );
};

export default RightNav;
