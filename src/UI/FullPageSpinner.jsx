import { Loader2 } from "lucide-react";

function FullPageSpinner() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FCF6ED]">
      <Loader2
        className="w-12 h-12 animate-spin text-[#775A19] mb-4"
        strokeWidth={1.5}
      />

      <p className="font-serif text-lg font-medium text-[#5c3e2e] animate-pulse tracking-wide">
        Brewing your experience...
      </p>
    </div>
  );
}

export default FullPageSpinner;
