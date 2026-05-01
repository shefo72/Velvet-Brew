import { AlertTriangle } from "lucide-react";
import Button from "../UI/Button";

const DeleteModal = ({ open, product, onCancel, onConfirm, isDeleting }) => {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-10 rounded-2xl w-80 text-center flex flex-col gap-4">
        <div className=" flex gap-2">
          <AlertTriangle className="text-red-700 " size={35} />
          <h2 className="text-2xl font-bold text-primary-coffee">
            Delete Product
          </h2>
        </div>

        <div>
          <p className="text-[#504442]">
            This action cannot be undone. Are you sure you want to remove
            <span className="font-semibold text-primary-coffee">
              {` ${product.product_name} `}
            </span>
            from your inventory?
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            disabled={isDeleting}
            onClick={onConfirm}
            className="bg-red-900 hover:bg-red-800 text-white rounded-lg md:rounded-xl px-4 py-2 md:px-6 md:py-3 font-semibold cursor-pointer "
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
          <Button type="secondary" onClick={onCancel} disabled={isDeleting}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
