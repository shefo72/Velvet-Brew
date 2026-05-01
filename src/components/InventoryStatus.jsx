import { useQuery } from "@tanstack/react-query";

import { getLowStockInventory } from "../api/overViewApi";
import Button from "../UI/Button";
import InventoryItem from "../components/InventoryItem";

export default function InventoryStatus() {
  const { data: inventoryData, isLoading } = useQuery({
    queryKey: ["low_stock_inventory"],
    queryFn: getLowStockInventory,
  });

  if (isLoading) {
    return (
      <div className="bg-[#EDE1CF] h-full rounded-2xl shadow-sm flex items-center justify-center p-6 text-primary-coffee animate-pulse">
        Checking stock levels...
      </div>
    );
  }

  const itemsList = (inventoryData?.data || inventoryData || []).slice(0, 5);

  return (
    <div className="bg-[#EDE1CF] h-full rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 ">
        <h2 className="font-serif text-lg font-bold text-primary-coffee">
          Low Stock Items
        </h2>
      </div>

      <div className="px-6 py-5 flex-1">
        {itemsList.map((item) => (
          <InventoryItem
            key={item.product_name}
            name={item.product_name}
            stock={Number(item.quantity)}
            unit={item.unit}
            low={item.is_low_stock === "1"}
            max={25}
          />
        ))}
      </div>

      <div className="px-6 pb-5 text-center">
        <Button type="secondary" to="/dashboard/inventory">
          Manage Full Inventory
        </Button>
      </div>
    </div>
  );
}
