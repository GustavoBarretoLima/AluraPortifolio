import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
}
export default function Button({
  styleSheet,
  children,
  fullWidth,
}: ButtonProps) {
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: "flex-start",
        ...(
          fullWidth && {
            alignSelf: "initial",
          }
        ),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
};

Button.Base = ButtonBase;
