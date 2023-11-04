"use client";
import { ModalProps } from "@/types/modal";
import { useEffect } from "react";

type Props = ModalProps & {
  children: JSX.Element;
};
export const Modal = ({ children, open }: Props) => {
  console.log({ open });
  useEffect(() => {
    if (open) {
      //@ts-ignore
      document.getElementById("app-modal").showModal();
    } else {
      //@ts-ignore
      document.getElementById("app-modal").close();
    }
  }, [open]);
  if (!open) return null;
  return (
    <dialog id="app-modal" className="modal">
      <div className="modal-box">
        {children}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
