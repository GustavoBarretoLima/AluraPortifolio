import React from "react";
import Box from "../Box";
import { text } from "stream/consumers";

interface TextProps {
    tag?: 'p' | 'li' | 'h1' | string;
    children?: React.ReactNode;
}
export default function Text (props: TextProps) {
    return (
        <Box {...props} />
    )
}

Text.defaultProps = {
    tag:'p',
};