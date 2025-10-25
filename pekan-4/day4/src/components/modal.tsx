import { ReactNode } from "react";
import ReactDOM from 'react-dom'

interface ModalProps{
    children: ReactNode;
    onClose: () => void

}
export default function Modal({children, onClose}: ModalProps) {
    const modalRoot = document.getElementById("modal-root") as HTMLElement

    if (!modalRoot) {
        console.log("modal root tidak ada");
    return null    
    }

    return ReactDOM.createPortal(
        <div onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>tutup</button>
            </div>
        </div>,modalRoot
    )
}