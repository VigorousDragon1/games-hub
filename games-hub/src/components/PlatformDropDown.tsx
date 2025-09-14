import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";

function PlatformDropDown() {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return <Text>{error.message}</Text>;

  const selectedPlatform = data?.results.find((p) => p.id === platformId);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline" ml="40px">
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                onClick={() => setPlatformId(platform.id)}
                value="#"
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformDropDown;
