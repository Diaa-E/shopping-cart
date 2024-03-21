import RegularButton from "../components/RegularButton";
import styles from "../styles/Home.module.css";
import shoppingImage from "../assets/images/shopping.jpg";
import saveImage from "../assets/images/save.jpg";
import greenImage from "../assets/images/green.png";
import dealsImage from "../assets/images/deals.jpg";
import { useOutletContext } from "react-router-dom";

export default function Home({})
{
    const [mobileMode] = useOutletContext().mobileMode;

    return (
        <>
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
            <div className={styles["promo"]}>
                <div className={styles["promo-text"]}>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</h2>
                    <h3>Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Repellendus placeat illo eos nemo
                        esse dignissimos ab eligendi eum veniam suscipit.
                        Quasi, repellat assumenda numquam amet odit harum
                        natus impedit facilis!
                    </h3>
                    <RegularButton
                        text={"Shop now!"}
                        classes={[styles["call-to-action"]]}
                        onClick={() => {}}
                    />
                </div>
                {
                    !mobileMode &&
                    <img src={shoppingImage} alt="shopping made fun" />
                }
            </div>
            <div className={styles["promo"]}>
                {
                    !mobileMode &&
                    <img src={saveImage} alt="save money" />
                }
                <div className={styles["promo-text"]}>
                    <h2>Lorem ipsum dolor, sit amet consectetur!</h2>
                    <h3>Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Repellendus placeat illo eos nemo
                        esse dignissimos ab eligendi eum veniam suscipit.

                    </h3>
                    <RegularButton
                        text={"Learn more"}
                        style="secondary"
                        onClick={() => {}}
                        classes={[styles["call-to-action"]]}
                    />
                </div>
            </div>
            <div className={styles["promo"]}>
                <div className={styles["promo-text"]}>
                    <h2>Lorem ipsum dolor, sit amet consectetur!</h2>
                    <h3>Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Repellendus placeat illo eos nemo
                        esse dignissimos ab eligendi eum veniam suscipit.

                    </h3>
                    <RegularButton
                        text={"Learn more"}
                        style="secondary"
                        onClick={() => {}}
                        classes={[styles["call-to-action"]]}
                    />
                </div>
                {
                    !mobileMode &&
                    <img src={greenImage} alt="save the planet" />
                }
            </div>
            <div className={styles["promo"]}>
                {
                    !mobileMode &&
                    <img src={dealsImage} alt="Find deals" />
                }
                <div className={styles["promo-text"]}>
                    <h2>Lorem ipsum dolor, sit amet consectetur!</h2>
                    <h3>Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Repellendus placeat illo eos nemo
                        esse dignissimos ab eligendi eum veniam suscipit.

                    </h3>
                    <RegularButton
                        text={"Find deals"}
                        style="primary"
                        onClick={() => {}}
                        classes={[styles["call-to-action"]]}
                    />
                    <RegularButton
                        text={"Learn more"}
                        style="secondary"
                        onClick={() => {}}
                        classes={[styles["call-to-action"]]}
                    />
                </div>
            </div>
        </>
    )
}