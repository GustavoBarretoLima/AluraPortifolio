import { ThemeTypographyVariants } from "@src/theme/theme";
import React from "react";
import { useRipple } from 'react-use-ripple';
import styled from "styled-components";
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";

const StyledButton = styled(Text) <any>`

`;

interface ButtonBase {
    href?: string;
    children:React.ReactNode;
    textVariant?: ThemeTypographyVariants;
    styleSheet?: StyleSheet;
}
export default function ButtonBase ({
    children,
    textVariant,
    styleSheet,
    href,
    ...props
}:ButtonBase) {
    const ref = React.useRef();
    const isLink = Boolean(href);
    const Tag= isLink? 'a' : 'button';
    useRipple(ref);

    return (
      <StyledButton ref={ ref } 
      tag={Tag}
      href={href}
      styleSheet={{
        border: '0',
        backgroundColor:'transparent',
        color: 'inherit',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet
      }}
      {...props}
    >
        {children}
      </StyledButton>
    );
}