import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import Link from "@src/components/Link/Link"


export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x600,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <a  href="/sobre">
      Vá para página sobre
      </a>
      <a href="https://google.com">
      Ir para o google
      </a>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading1">
          Últimos Projetos
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}