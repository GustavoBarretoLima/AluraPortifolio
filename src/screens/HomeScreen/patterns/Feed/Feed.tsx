import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
     styleSheet={{
      backgroundColor: theme.colors.neutral.x000,
      marginTop: '-228px',
      width: '100%',
      maxWidth: '683px',
      borderRadius: '8px',
      paddingVertical: '40px',
      paddingHorizontal: '32px',

     }}
    >
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
        Ola Mundo!!!
      </Button>
      <Button.Base href='https://github.com/GustavoBarretoLima'>
        <Image
          styleSheet={{
            width: "128px",
            heigth: "128px",
            borderRadius: "100%",
          }}
          src="https://github.com/GustavoBarretoLima.png"
          alt="Imagem de perfil Gustavo Barreto"
        />
      </Button.Base>

      <Link colorVariant="negative" href="https://www.youtube.com/@0taichou">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitch" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed Header</Text>
    </Box>
  );
};
Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
