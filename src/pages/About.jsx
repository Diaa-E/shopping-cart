import styles from "../styles/About.module.css";
import aboutImage from "../assets/images/about.jpg"

export default function About({ }) {
    return (
        <>
            <div className={styles["hero"]}>
                <h1>Our Story</h1>
                <img src={aboutImage} alt="A cardboard box" />
                <p className={styles["one"]}> Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Dolor sapiente recusandae sed veniam dicta beatae,
                    eveniet temporibus ex harum impedit non aut eius illo ipsam perspiciatis
                    molestias quas nam ab!
                </p>
                <p className={styles["two"]}> Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Dolor sapiente recusandae sed veniam dicta beatae,
                    eveniet temporibus ex harum impedit non aut eius illo ipsam perspiciatis
                    molestias quas nam ab!
                </p>
                <p className={styles["three"]}> Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Dolor sapiente recusandae sed veniam dicta beatae,
                    eveniet temporibus ex harum impedit non aut eius illo ipsam perspiciatis
                    molestias quas nam ab!
                </p>
            </div>
        </>
    )
}