import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu () {
    const theme = useTheme();
    return (
        <Box
          styleSheet={{
            position: 'absolute',
            left: 0, right: 0, top: 0,
            flexDirection: 'row',

          }}
        > 
          <Button.Base>
            <Text>
              MS
            </Text>
          </Button.Base>
          <Button.Base>  
            <Icon name="default_icon" />         
          </Button.Base>
        </Box>
    )
}