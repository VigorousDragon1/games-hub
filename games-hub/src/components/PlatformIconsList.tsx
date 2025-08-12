import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconsList({ platforms }: Props) {
  const iconsMap: Record<string, IconType> = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ps4: FaPlaystation,
    ps5: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    iphone: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack  padding={"10px"}>
      {platforms.map((platform) => {
        const IconComponent = iconsMap[platform.slug];
        if (!IconComponent) {
          console.warn(`No icon mapped for platform slug: "${platform.slug}"`);
          return null;
        }
        return <Icon key={platform.id} as={IconComponent}  />;
      })}
    </HStack>
  );
}

export default PlatformIconsList;
