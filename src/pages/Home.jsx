import RegularButton from "../components/RegularButton";
import styles from "../styles/Home.module.css";

export default function Home({})
{
    return (
        <div className={styles["hero"]}>
            <div className={styles["hero-banner"]}>
                <h2>Qui ea atque minus sequi rem vitae dolorem, magnam saepe, debitis quisquam suscipit.</h2>
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                <RegularButton
                    text={"Shop now"}
                    classes={[styles["call-to-action"]]}
                    style="primary"
                    onClick={() => {}}
                />
                <RegularButton
                    text={"Learn more"}
                    classes={[styles["call-to-action"]]}
                    style="secondary"
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}