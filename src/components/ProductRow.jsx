import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { formatCurrency } from "../utils/helpers";

const ProductRow = React.memo(({ product, onEditClick, onDeleteClick }) => {
  const { product_id, product_name, collection, roast_type, price } = product;

  return (
    <tr className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors last:border-none">
      <td className="hidden md:block py-4 px-6 text-primary-coffee font-bold">
        #{product_id}
      </td>

      <td className="py-3 px-4 md:py-4 md:px-6">
        <div className="text-primary-coffee font-bold">{product_name}</div>
        <div className="hidden md:block text-xs text-gray-500 capitalize mt-0.5">
          {collection} {roast_type ? `• ${roast_type}` : ""}
        </div>
      </td>

      <td className="py-3 px-4 md:py-4 md:px-6 text-primary-coffee font-bold">
        {formatCurrency(price)}
      </td>

      <td className="py-3 px-4 md:py-4 md:px-6 text-right">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onEditClick(product)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => onDeleteClick(product)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
});

export default ProductRow;
