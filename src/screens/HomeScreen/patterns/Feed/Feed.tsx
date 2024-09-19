import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";

interface FeedProps {
    children: React.ReactNode;
}

export default function Feed ({ children }) {
    return (
        <Box>
            <Text>
                Feed Base
            </Text>
            { children }
        </Box>
    )
}

Feed.Header = () => {
    return (
        <Box 
        styleSheet={{ 
            color: 'white',
        }}
        >
            <Image 
            styleSheet={{
                width: '128px',
                heigth: '128px',
                borderRadius: '100%',
            }}
            src="https://github.com/GustavoBarretoLima.png"
            alt="Imagem de perfil Gustavo Barreto"
            />
            <Icon name = "youtube" />
            <Icon name = "twitch" />
            <Icon name = "instagram" />
            <Icon name = "github" />
            <Text>
                Feed Header
            </Text>
        </Box>
    )
}
Feed.Posts = () => {
    return (
        <Box>
            <Text>
                Feed Posts
            </Text>
        </Box>
    )
}

