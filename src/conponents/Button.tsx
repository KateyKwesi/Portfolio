type ButtonSize = "sm" | "default" | "lg";

type ButtonProps = React.ComponentProps<"button"> & {
  size?: ButtonSize;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = ({ className = "", size = "default", children, ...props }: ButtonProps) => (
  <button
    className={`relative inline-flex items-center justify-center gap-2 rounded-full font-medium bg-primary text-white hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
