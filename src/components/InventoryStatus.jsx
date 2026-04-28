import { MoreVertical, AlertTriangle } from "lucide-react";
import Button from "../UI/Button";

const inventory = [
  { name: "Ethiopian Yirgacheffe", stock: 12, max: 100, low: true },
  { name: "Colombian Excelso", stock: 45, max: 100, low: false },
  { name: "Sumatra Mandheling", stock: 82, max: 100, low: false },
  { name: "Kenya AA Plus", stock: 28, max: 100, low: false },
];

export default function InventoryStatus() {
  return (
    <div className="bg-[#EDE1CF] h-full rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 ">
        <h2 className="font-serif text-lg font-bold text-primary-coffee">
          Inventory Status
        </h2>
      </div>
      <div className="px-6 py-5 flex-1">
        {inventory.map((item) => (
          <InventoryItem key={item.name} {...item} />
        ))}
      </div>
      <div className="px-6 pb-5 text-center">
        <Button type="secondary">Manage Full Inventory</Button>
      </div>
    </div>
  );
}

function InventoryItem({ name, stock, max, low }) {
  const Percentage = Math.round((stock / max) * 100);

  const barColor = low
    ? "bg-red-500"
    : stock < 40
      ? "bg-amber-500"
      : "bg-primary-coffee";

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-primary-coffee">{name}</span>
        <span
          className={`text-xs font-bold ${low ? "text-red-600" : "text-[#57534E]"}`}
        >
          {stock}kg Left
        </span>
      </div>
      <div className="h-1.5 bg-[#E7E5E4] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${Percentage}%` }}
        />
      </div>
      {low && (
        <div className="flex items-center gap-1 mt-1.5">
          <AlertTriangle size={11} className="text-red-500" />
          <span className="text-[10px] font-semibold text-red-600 uppercase tracking-wider">
            Low Stock — Order Soon
          </span>
        </div>
      )}
    </div>
  );
}
