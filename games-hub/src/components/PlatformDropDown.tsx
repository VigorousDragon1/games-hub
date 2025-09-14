import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import type {Platform} from "../hooks/usePlatforms";

interface Props{
    oonClick:(platform:Platform)=>void,
    selectedPlatform:Platform|null
}

function PlatformDropDown({oonClick,selectedPlatform}:Props) {
  const { data  ,error } = usePlatforms();
if (error) return <Text>{error.message}</Text>
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline" ml={"40px"} >
        {selectedPlatform?.name||'Platforms'}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item onClick={()=>oonClick(platform)} value="#" key={platform.id}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformDropDown;
