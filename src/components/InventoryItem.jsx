import { AlertTriangle } from "lucide-react";

function InventoryItem({ name, stock, unit, max, low }) {
  const Percentage = Math.min(Math.round((stock / max) * 100), 100);

  const barColor = low
    ? "bg-red-500"
    : stock < max * 0.4
      ? "bg-amber-500"
      : "bg-primary-coffee";

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-primary-coffee">{name}</span>
        <span
          className={`text-xs font-bold ${low ? "text-red-600" : "text-[#57534E]"}`}
        >
          {stock} {unit} Left
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

export default InventoryItem;
