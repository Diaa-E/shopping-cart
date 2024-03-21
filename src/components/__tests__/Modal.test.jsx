import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";

describe("MOdal component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx)
        }
    }

    function generateModalState(open = false, prompt = "", actionText = "", onConfirm = () => {})
    {
        return {
        
            open: open,
            prompt: prompt,
            actionText: actionText,
            onConfirm: onConfirm
        }
    }

    it("Closes modal when backdrop is clicked", async () => {

        const modalState = generateModalState();
        const closeModal = vi.fn();
        const { user, container } = setup(<Modal closeModal={closeModal} modalState={modalState}/>);
        const backdropElement = container.querySelector("#modalBackdrop");
        await user.click(backdropElement);

        expect(closeModal).toHaveBeenCalledOnce();
    });

    it("Does not close modal when the modal itself is clicked", async () => {

        const modalState = generateModalState();
        const closeModal = vi.fn();
        const { user, container } = setup(<Modal closeModal={closeModal} modalState={modalState}/>);
        const modalElement = container.querySelector("#modal");
        await user.click(modalElement);

        expect(closeModal).not.toHaveBeenCalled();
    });

    it("Renders prompt from props", () => {

        const modalState = generateModalState(true, "are you sure?", "yes");
        const { container } = setup(<Modal closeModal={() => {}} modalState={modalState}/>);
        const promptElement = container.querySelector("#modalPrompt");

        expect(promptElement.textContent).toBe(modalState.prompt);
    });

    it("Renders a cancel button", () => {

        const modalState = generateModalState(true, "are you sure?", "yes");
        const { container } = setup(<Modal closeModal={() => {}} modalState={modalState}/>);
        const cancelButton = container.querySelector("#cancelButton");

        expect(cancelButton.textContent.toLowerCase()).toBe("cancel");
    });

    it("Renders a confirm button with text from props", () => {

        const modalState = generateModalState(true, "are you sure?", "yes");
        const { container } = setup(<Modal closeModal={() => {}} modalState={modalState}/>);
        const confirmButton = container.querySelector("#confirmButton");

        expect(confirmButton.textContent).toBe(modalState.actionText);
    });

    it("Closes modal when cancel button is clicked", async () => {

        const modalState = generateModalState();
        const closeModal = vi.fn();
        const { user, container } = setup(<Modal closeModal={closeModal} modalState={modalState}/>);
        const cancelButton = container.querySelector("#cancelButton");
        await user.click(cancelButton);

        expect(closeModal).toHaveBeenCalledOnce();
    });

    it("Calls onConfirm function and closes modal when confirm button is clicked", async () => {

        const onConfirm = vi.fn();
        const closeModal = vi.fn()
        const modalState = generateModalState(true, "", "", onConfirm);
        const { user, container } = setup(<Modal closeModal={closeModal} modalState={modalState}/>);
        const confirmButton = container.querySelector("#confirmButton");
        await user.click(confirmButton);

        expect(onConfirm).toHaveBeenCalledOnce();
        expect(closeModal).toHaveBeenCalledOnce();
    });
});