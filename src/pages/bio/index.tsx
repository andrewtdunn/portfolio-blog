import awsExports from "@/aws-exports";
import { DataStore, withSSRContext } from "aws-amplify";
import { GetServerSideProps, GetStaticProps } from "next";
import styles from "./bio.module.scss";
import BioPost from "../../../components/bio/bio-post";
import Header from "../../../components/layout/header";
import {
  AWSCertification,
  Agency,
  Bio,
  MiscCertification,
  School,
} from "@/models";
import Head from "next/head";
import Fader from "../../../components/utils/fader";

const BioPage = ({
  bio,
  schools,
  miscCertifications,
  awsCertifications,
  agencies,
}: {
  bio: Bio;
  schools: School[];
  miscCertifications: MiscCertification[];
  awsCertifications: AWSCertification[];
  agencies: Agency[];
}) => {
  return (
    <div className={styles.Bio}>
      <Head>
        <title>⚡︎ ATD | Bio</title>
      </Head>
      <Header includeBanner={false} dark={true} subheader="Bio / C.V." />
      <Fader />
      <div className={styles.bioHolder}>
        <div className={styles.inner}>
          <BioPost
            bio={bio}
            schools={schools}
            miscCertifications={miscCertifications}
            awsCertifications={awsCertifications}
            agencies={agencies}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const SSR = withSSRContext();
  try {
    const models = await SSR.DataStore.query(Bio);
    const bio = models[0];
    const schools = await SSR.DataStore.query(School, (c: any) =>
      c.bioID.eq(bio.id)
    );
    const miscCertifications = await SSR.DataStore.query(
      MiscCertification,
      (c: any) => c.bioID.eq(bio.id)
    );
    const awsCertifications = await SSR.DataStore.query(
      AWSCertification,
      (c: any) => c.bioID.eq(bio.id)
    );
    const agencies = await SSR.DataStore.query(Agency, (c: any) =>
      c.bioID.eq(bio.id)
    );

    return {
      props: {
        bio: JSON.parse(JSON.stringify(bio)),
        schools: JSON.parse(JSON.stringify(schools)),
        miscCertifications: JSON.parse(JSON.stringify(miscCertifications)),
        awsCertifications: JSON.parse(JSON.stringify(awsCertifications)),
        agencies: JSON.parse(JSON.stringify(agencies)),
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default BioPage;
