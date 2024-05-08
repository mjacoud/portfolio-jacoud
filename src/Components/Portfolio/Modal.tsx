import { ReactElement } from "react";


interface ModalProps{
    header?:ReactElement
    body?:ReactElement
}


export const Modal:React.FC<ModalProps> =  ({header,body}) =>{
    return (
        <>
        <dialog open className="dialog__background">
            <div className="modal__container">
                {header}
                {body}
            </div>
        </dialog>
        </>
    )
}