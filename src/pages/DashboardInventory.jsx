import { useQuery } from "@tanstack/react-query";
import { getInventory } from "../api/overViewApi";
import FullPageSpinner from "../UI/FullPageSpinner";
import QueryError from "../UI/QueryError";
import { AlertCircle, CheckCircle2 } from "lucide-react";

function DashboardInventory() {
  const {
    data: inventoryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventory,
  });

  if (isLoading) return <FullPageSpinner />;
  if (error) return <QueryError error={error} />;

  const allItems = inventoryData?.data || inventoryData || [];

  return (
    <main className="flex-1 overflow-y-auto p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary-coffee">
            Full Inventory Management
          </h1>
          <p className="text-sm text-muted-coffee mt-1">
            Monitor and manage your stock levels across all products.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#EBE1D6] overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FCF6ED] border-b border-[#EBE1D6]">
                  <th className="py-4 px-6 font-semibold text-[#5c3e2e] text-sm whitespace-nowrap">
                    Product Name
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#5c3e2e] text-sm whitespace-nowrap">
                    Current Stock
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#5c3e2e] text-sm whitespace-nowrap">
                    Threshold
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#5c3e2e] text-sm whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {allItems.map((item, index) => {
                  const isLow = item.is_low_stock === "1";

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors last:border-none"
                    >
                      <td className="py-4 px-6 text-[#3a2d28] font-medium">
                        {item.product_name}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <span className={"font-bold text-primary-coffee"}>
                          {item.quantity}
                        </span>{" "}
                        <span className="text-xs text-gray-800 uppercase">
                          {item.unit}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-800">
                        {item.low_stock_threshold}{" "}
                        <span className="text-xs uppercase">{item.unit}</span>
                      </td>
                      <td className="py-4 px-6">
                        {isLow ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100">
                            <AlertCircle size={14} />
                            Low Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                            <CheckCircle2 size={14} />
                            In Stock
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardInventory;
