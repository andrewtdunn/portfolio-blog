import { FC } from "react";
import styles from "./bio-post.module.scss";
import CertifcationImage from "./certification-image";
import Image from "next/image";
import localFont from "next/font/local";
import {
  AWSCertification,
  Agency,
  Bio,
  MiscCertification,
  School,
} from "@/models";

export const albertusFont = localFont({
  src: "../../public/fonts/Albertus Medium Regular font.ttf",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

type BioProps = {
  bio: Bio;
  schools: School[];
  miscCertifications: MiscCertification[];
  awsCertifications: AWSCertification[];
  agencies: Agency[];
};

const BioPost: FC<BioProps> = ({
  bio,
  schools,
  miscCertifications,
  awsCertifications,
  agencies,
}) => {
  const { image, intro, introClosing, signatureImage } = bio;
  return (
    <div className={`${styles.BioPost} ${albertusFont.className}`}>
      <div className={styles.introHolder}>
        <Image
          className={styles.bioImage}
          src={image!}
          alt="bioImage"
          width={266}
          height={347}
        />
        <div className={styles.bioIntro}>
          <span className={styles.drop_cap}>{intro.charAt(0)}</span>
          {intro.substring(1)}
        </div>
        <div className={styles.bioClosing}>
          <p>{introClosing}</p>
          <Image
            className={styles.bioSignature}
            src={signatureImage!}
            alt="signature"
            width={300}
            height={59}
          />
        </div>
        <div className={styles.schoolHolder}>
          {schools.map((school: School, i: number) => {
            return (
              <div key={i} className={styles.schoolLabel}>
                <Image
                  className={styles.schoolImage}
                  src={school.image!}
                  alt={school.name!}
                  width={100}
                  height={100}
                />
                <div>
                  <h1>{school.name}</h1>
                  <h1 className={styles.degreeInfo}>{school.degree}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.sectionHolder}>
          <h4 className={styles.sectionHeader}>Certifications</h4>
        </div>
        <div className={styles.certificationsHolder}>
          {miscCertifications.map((cert: MiscCertification, i: number) => {
            return (
              <CertifcationImage
                key={i}
                url={cert.image!}
                name={cert.name!}
                link={cert.link!}
              />
            );
          })}
        </div>
        <div className={styles.certificationsHolder}>
          {awsCertifications.map((cert: AWSCertification, i: number) => {
            return (
              <CertifcationImage
                key={i}
                url={cert.image!}
                name={cert.name!}
                link={cert.link!}
              />
            );
          })}
        </div>
        <div className={styles.sectionHolder}>
          <h4 className={styles.sectionHeader}>Select Work</h4>
        </div>
        <div className={styles.agencyHolder}>
          {agencies.map((agency: Agency, i: number) => {
            return (
              <Image
                key={i}
                className={styles.agencyImage}
                src={agency.image!}
                alt={agency.name!}
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BioPost;
