import type { ButtonHTMLAttributes } from "react";

export function Button({
  kind = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "primary" | "secondary" | "outline";
}) {
  return (
    <button
      type="button"
      {...props}
      className={`button button--${kind} ${props.className ?? ""}`}
    />
  );
}
