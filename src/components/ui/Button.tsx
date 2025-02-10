import { ReactNode } from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({ className, children, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} p-2 ${width} text-white rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
