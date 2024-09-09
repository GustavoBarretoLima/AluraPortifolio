import { BaseComponent } from "@src/theme/BaseComponent";
import { Stylesheet } from "@src/theme/Stylesheet";
import React from "react";  

interface BoxProps {
    tag: any;
    children:React.ReactNode;
    styleSheet:Stylesheet;
}
export default function Box({styleSheet,children, tag, ...props}: BoxProps) {
    const Tag = tag || 'div';
    return (
        <BaseComponent as={tag} styleSheet={styleSheet} {...props}>
            {children}

        </BaseComponent>
    );
}
