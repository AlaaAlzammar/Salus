"use client";

import { forwardRef, type MouseEvent } from "react";
import Mark from "./Mark";

type NoticeDialogProps = {
  kind: string;
  title: string;
  body: string;
  closeLabel: string;
};

const NoticeDialog = forwardRef<HTMLDialogElement, NoticeDialogProps>(
  function NoticeDialog({ kind, title, body, closeLabel }, ref) {
    /** A click on the backdrop targets the <dialog> itself, outside its box. */
    const closeOnBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
      const dialog = e.currentTarget;
      if (e.target !== dialog) return;

      const { left, right, top, bottom } = dialog.getBoundingClientRect();
      const outside =
        e.clientX < left ||
        e.clientX > right ||
        e.clientY < top ||
        e.clientY > bottom;

      if (outside) dialog.close();
    };

    return (
      <dialog
        ref={ref}
        data-kind={kind}
        aria-labelledby="notice-title"
        aria-describedby="notice-body"
        onClick={closeOnBackdropClick}
      >
        <div className="dialog-content">
          <Mark width={38} height={42} />
          <h2 id="notice-title">{title}</h2>
          <p id="notice-body">{body}</p>
          <button
            className="primary"
            type="button"
            onClick={(e) => e.currentTarget.closest("dialog")?.close()}
          >
            {closeLabel}
          </button>
        </div>
      </dialog>
    );
  }
);

export default NoticeDialog;
