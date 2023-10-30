import Image from "next/image";
import styles from "./space-background.module.scss";
import { useState } from "react";

type SpaceBackgroundProps = {
  backgrounded: boolean;
  distant: boolean;
};

const SpaceBackground = ({ backgrounded, distant }: SpaceBackgroundProps) => {
  return (
    <div
      className={`${styles.SpaceBackground} ${
        backgrounded && styles.backgrounded
      } ${distant && styles.distant}`}
    >
      <Image
        src="/images/space_bkgd2.jpg"
        width={500}
        height={500}
        alt="space_bkgd"
        priority
      />
    </div>
  );
};

export default SpaceBackground;
