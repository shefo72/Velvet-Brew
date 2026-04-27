export default function RecentOrders({ orders }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-secondary-coffee ">
      <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-coffee">
        <h2 className="font-serif text-lg font-bold text-primary-coffee">
          Recent Orders
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-muted-coffee border-b border-secondary-coffee">
              <th className="text-left px-6 py-3 font-semibold">Order ID</th>
              <th className="text-left px-6 py-3 font-semibold">Customer</th>
              <th className="text-left px-6 py-3 font-semibold hidden md:table-cell">
                Items
              </th>
              <th className="text-left px-6 py-3 font-semibold">Status</th>
              <th className="text-right px-6 py-3 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={order.id}
                className={`hover:bg-secondary-coffee/50 transition-colors duration-150 ${
                  i !== orders.length - 1
                    ? "border-b border-secondary-coffee"
                    : ""
                }`}
              >
                <td className="px-6 py-4 text-sm font-mono text-muted-coffee">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-primary-coffee">
                  {order.customer}
                </td>
                <td className="px-6 py-4 text-sm text-muted-coffee hidden md:table-cell">
                  {order.items}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${order.status === "Roasting" ? "bg-amber-100 text-amber-800" : order.status === "In Route" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary-coffee text-right">
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
