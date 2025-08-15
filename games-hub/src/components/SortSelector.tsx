import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

function SortSelector({ onSelectOrder, selectedOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentLabel =
    sortOrders.find((order) => order.value === selectedOrder)?.label ||
    "Relevance";

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline" margin={"10px"}>
          Order By : {currentLabel}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item value="#"
                onClick={() => onSelectOrder(order.value)}
                key={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
