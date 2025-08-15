import { Button, Menu, Portal } from "@chakra-ui/react";

function SortSelector() {
 return (
     <Menu.Root>
       <Menu.Trigger asChild>
         <Button size="sm" variant="outline" margin={"10px"}>
       Order By : Relevance
         </Button>
       </Menu.Trigger>
       <Portal>
         <Menu.Positioner>
           <Menu.Content>
           <Menu.Item value="#">a</Menu.Item>
           <Menu.Item value="#">s</Menu.Item>
           <Menu.Item value="#">d</Menu.Item>
           <Menu.Item value="#">d</Menu.Item>
           <Menu.Item value="#">f</Menu.Item>
           <Menu.Item value="#">b</Menu.Item>
           </Menu.Content>
         </Menu.Positioner>
       </Portal>
     </Menu.Root>
   );
}

export default SortSelector