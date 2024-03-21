import styles from "../styles/Modal.module.css";
import RegularButton from "./RegularButton";

export default function Modal({ modalState, closeModal })
{
    return (
        <div id="modalBackdrop" onClick={closeModal} className={styles["modal-backdrop"]}>
            <div id="modal" onClick={e => e.stopPropagation()} className={styles["modal"]}>
                <p id="modalPrompt" className={styles["prompt"]}>{modalState.prompt}</p>
                <RegularButton
                    id={"cancelButton"}
                    onClick={closeModal}
                    text={"Cancel"}
                    style="secondary"
                />
                <RegularButton
                    id={"confirmButton"}
                    onClick={modalState.onConfirm}
                    text={modalState.actionText}
                    style="danger"
                />
            </div>
        </div>
    )
}