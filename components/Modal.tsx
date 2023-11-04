type Props = {
  children: JSX.Element;
  id: string;
};
export const Modal = ({ children, id }: Props) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        {children}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
