import React from "react";
import NextLink from 'next/link';
import Text from "../Text/Text";

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

export default function Link ({ href, children, ...props }:LinkProps) {
    const isExternalLink = href.startsWith('http');
    
    const linkProps = {
        children,
        ...props,
    }
    if(isExternalLink) return <Text href={href}{...linkProps} />



    return (
        <NextLink href={href} passHref>
      <text {...linkProps}>
        {children}
      </text>            
        </NextLink>
    )
}