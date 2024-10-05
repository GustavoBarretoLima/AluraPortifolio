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
        marginTop: "-228px",
        width: "100%",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "32px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: "24px",
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Button.Base>

        <Image
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            heigth: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
          src="https://github.com/GustavoBarretoLima.png"
          alt="Imagem de perfil Gustavo Barreto"
        />
        </Button.Base>
        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Buy me a coffe
            </Button>
          </Box>
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">
              Buy me a coffe
            </Button>
          </Box>
        </Box>
      </Box>
      <Button.Base>
        <Link
          colorVariant="neutral"
          href="https://github.com/GustavoBarretoLima"
        >
          <Text tag="h1" variant="heading4">
            Gustavo Barreto
          </Text>
        </Link>
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
