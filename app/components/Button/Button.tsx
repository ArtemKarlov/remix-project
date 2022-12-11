import type { LinksFunction } from "@remix-run/node";
import clsx from "clsx";

import styles from "./Button.styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
};

export default function Button({
  children,
  onClick,
  size = "md",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx("my-button", `button_size_${size}`, className)}
      onClick={onClick}
    >
      <div>{children}</div>
    </button>
  );
}
