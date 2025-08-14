import { Button, Menu, Portal } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

function PlatformDropDown() {
  const { platforms } = usePlatforms();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline" margin={"10px"}>
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item value="#" key={platform.id}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformDropDown;
