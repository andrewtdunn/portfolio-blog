import { Blog } from "@/models";
import styles from "./featuredPostButton.module.scss";
import Title from "../utils/title";
import Image from "next/image";
import { mod } from "three/examples/jsm/nodes/Nodes.js";
import { albertusFont } from "../bio/bio-post";
import { useContext } from "react";
import { SoundContext } from "../../store/sound-context";

type FeaturedPostButtonType = {
  model: Blog;
  callback: (model: Blog) => void;
};

const FeaturedPostButton = ({ model, callback }: FeaturedPostButtonType) => {
  const soundCtx = useContext(SoundContext);
  return (
    <div
      className={styles.FeaturedPostButton}
      onClick={() => {
        soundCtx?.buttonNoise();
        callback(model);
      }}
    >
      {model.image ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${model.image!}`}
          width={200}
          height={200}
          alt={model.title ? model.title : "untitled"}
          className={styles.buttonImage}
        />
      ) : model.slides?.length ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${model.slides[0]!}`}
          width={200}
          height={200}
          alt={model.title ? model.title : "untitled"}
          className={styles.buttonImage}
        />
      ) : (
        <div className={styles.buttonImage}></div>
      )}
      <h1 className={albertusFont.className}>
        {model.title ? model.title : "untitled"}
      </h1>
    </div>
  );
};

export default FeaturedPostButton;
