import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";
import { Button } from "./Button";

export function Modal({
  children,
  close,
}: {
  children: ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    d?.showModal();
    return () => d?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      aria-labelledby="dialog-title"
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
    >
      <div className="dialog-body">
        <button
          className="dialog-close"
          onClick={close}
          aria-label="Close dialog"
        >
          Close
        </button>
        {children}
      </div>
    </dialog>
  );
}
export function Enquiry({ subject }: { subject: string }) {
  const [ready, setReady] = useState(false);
  function download(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const url = URL.createObjectURL(
      new Blob(
        ["MAISON | Private advisory\n" + subject + "\n\n" + form.get("brief")],
        { type: "text/plain;charset=utf-8" },
      ),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "maison-enquiry.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setReady(true);
  }
  return (
    <>
      <span className="eyebrow">Private advisory</span>
      <h2 id="dialog-title">Your enquiry</h2>
      <p>{subject}</p>
      <p className="caption">
        Prepare a personal brief to download. This demo keeps your enquiry on
        this device.
      </p>
      <form className="enquiry-form" onSubmit={download}>
        <label>
          What are you looking for?
          <textarea
            name="brief"
            required
            maxLength={1500}
            rows={4}
            placeholder="Location, type of home, or a question"
          />
        </label>
        <Button type="submit">Download brief</Button>
        {ready && <p role="status">Your brief is ready to download.</p>}
      </form>
    </>
  );
}
