import { FC } from "react";
import styles from "./certiifcation-image.module.scss";
import Link from "next/link";
import Image from "next/image";

type CertificationImageProps = {
  url: string;
  name: string;
  link: string;
};

const CertifcationImage: FC<CertificationImageProps> = ({
  url,
  name,
  link,
}) => {
  return (
    <Link href={link} target="blank">
      <div className={styles.CertificationImage}>
        <Image src={url} alt={name} width={110} height={110} />
      </div>
    </Link>
  );
};

export default CertifcationImage;
