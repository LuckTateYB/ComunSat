import React from "react";
import { cn } from "../../lib/utils";

type Variant = "outline" | "accent" | "ghost" | "default" | "heroOutline";
type Size = "sm" | "md" | "lg" | "xl";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  className?: string;
};

const variantMap: Record<Variant, string> = {
  outline: "border border-[#000000] bg-transparent text-foreground hover:bg-[#0B2C6B]/90 hover:text-white",
  accent: "bg-primary text-primary-foreground hover:opacity-95",
  ghost: "bg-transparent hover:bg-muted",
  default: "bg-card",
  heroOutline: "rounded-2xl border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
};

const sizeMap: Record<Size, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
  xl: "px-6 py-3 text-xl",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", asChild = false, className, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center gap-2 rounded-md font-medium transition-colors focus:outline-none",
      variantMap[variant],
      sizeMap[size],
      className,
    );

    if (asChild && React.isValidElement(children)) {
        const child = children as React.ReactElement<{ className?: string }>;

        return React.cloneElement(child, {
            className: cn(classes, child.props.className),
        });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
