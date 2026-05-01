import { AlertTriangle } from "lucide-react";

const DeleteModal = ({ open, product, onCancel, onConfirm }) => {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl w-80 text-center">
        <div className="intro">
          <div className=" flex gap-2">
            <AlertTriangle className="text-red-500 " size={35} />
            <h2 className="text-2xl font-bold text-[#271310]">
              {" "}
              Delete Product?
            </h2>
          </div>
          <p className="text-[#504442]">
            This action cannot be undone. Are you sure you want to remove 'Huila
            Supremo' from your inventory?
          </p>
        </div>

        {/* product data */}
        <div className="bg-[#F8ECDA] m-3  flex justify-between p-2">
          <img
            src={product.image_url}
            alt={product.product_name}
            className="w-10 h-10 md:w-20 md:h-20 object-cover "
          />
          <div className="px-2">
            <h3 className="text-xs text-[#271310] font-bold">
              {product.product_name}
            </h3>
            <p className="text-sm text-gray-500">{product.category_name}</p>
            <div className="mt-2 font-bold text-[#271310] text-xl">
              ${product.base_price}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-[#93000A] text-white px-4 py-1 rounded-full  "
          >
            Delete Product
          </button>
          <button onClick={onCancel} className=" px-3 py-1 rounded-full ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
