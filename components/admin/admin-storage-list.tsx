import { useEffect, useState } from "react";
import styles from "./admin-storage-list.module.scss";
import { Storage, S3ProviderListOutputItem } from "@aws-amplify/storage";
import Image from "next/image";

const StorageList = () => {
  const [imageKeys, setImageKeys] = useState<S3ProviderListOutputItem[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    const { results } = await Storage.list("", { level: "public" });
    setImageKeys(results);
    const s3Images = await Promise.all(
      results.map(
        async (image) => await Storage.get(image.key!, { level: "public" })
      )
    );
    setImages(s3Images);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className={styles.StorageList}>
      <ul>
        {images.map((image, index) => (
          <li key={index} className={styles.item}>
            <Image
              src={image}
              height={40}
              width={40}
              alt={`image${index}`}
              style={{ objectFit: "contain" }}
            />
            <p>{`/${imageKeys[index].key}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StorageList;
