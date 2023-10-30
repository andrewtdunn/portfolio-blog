import styles from "./contact-form.module.scss";
import useForm from "./use-form";
import validate from "./contact-form-validation-rules";
import { albertusFont } from "../bio/bio-post";
import { useContext, useState } from "react";
import { SoundContext } from "../../store/sound-context";
import { ImSpinner } from "react-icons/im";
import { MdCached } from "react-icons/md";

type ContactFormType = {
  error?: {};
};

const ContactForm = ({ error }: ContactFormType) => {
  const soundCtx = useContext(SoundContext);
  const [isPostingEmail, setIsPostingEmail] = useState<boolean>(false);
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const submitForm = async () => {
    const cleanedValues = {
      email: values.email,
      message: values.message,
      name: values.visitor,
    };
    setIsPostingEmail(true);
    soundCtx?.buttonNoise();
    const response = await fetch("/api/post_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cleanedValues),
    });
    setIsPostingEmail(false);
    if (response.status == 200) {
      setEmailSuccess(true);
      soundCtx?.buttonNoise();
    } else {
      setHasError(true);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    submitForm,
    validate
  )!;
  return (
    <div className={`${styles.ContactForm} ${albertusFont.className}`}>
      <h1>✉️ Send A Message</h1>
      <hr />
      {hasError && (
        <p className={styles.errorMessage}>
          Unable to send email at this time.
        </p>
      )}
      {!emailSuccess ? (
        <>
          <div className={albertusFont.className}>
            <input
              placeholder="name"
              name="visitor"
              value={values.visitor || ""}
              onChange={handleChange}
              className={`${styles.input} ${
                !errors.empty &&
                (errors.visitor ? styles.isDanger : styles.isSuccess)
              }  ${albertusFont.className}`}
              autoFocus
            />
            <div className={styles.errorHolder}>
              {!errors.empty && errors.visitor && (
                <p className={`${styles.help} ${styles.isDanger}`}>
                  {errors.visitor}
                </p>
              )}
            </div>
            <input
              placeholder="email"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              className={`input ${
                !errors.empty &&
                (errors.email ? styles.isDanger : styles.isSuccess)
              } ${albertusFont.className}`}
              autoComplete="off"
            />
            <div className={styles.errorHolder}>
              {!errors.empty && errors.email && (
                <p className={`${styles.help} ${styles.isDanger}`}>
                  {errors.email}
                </p>
              )}
            </div>
            <textarea
              placeholder="message"
              className={`input ${
                !errors!.empty &&
                (errors!.message ? styles.isDanger : styles.isSuccess)
              }   ${albertusFont.className}`}
              rows={8}
              name="message"
              value={values.message || ""}
              onChange={handleChange}
            />

            <div className={styles.errorHolder}>
              {!errors.empty && errors.message && (
                <p className={`${styles.help} ${styles.isDanger}`}>
                  {errors.message}
                </p>
              )}
            </div>
            {!emailSuccess && (
              <button
                type="submit"
                className={`${styles.button} ${styles.isBlock} ${styles.isInfo} ${styles.isFullWidth}   ${albertusFont.className} `}
                onClick={handleSubmit}
                disabled={Object.keys(errors).length !== 0}
              >
                {!isPostingEmail ? (
                  "SEND"
                ) : (
                  <div className={styles.loadingSpinner}>
                    <MdCached />
                  </div>
                )}
              </button>
            )}
          </div>
        </>
      ) : (
        <p>Thank you! I will get back to you.</p>
      )}
    </div>
  );
};

export default ContactForm;
