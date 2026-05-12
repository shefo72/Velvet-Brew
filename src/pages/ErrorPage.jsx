import { useRouteError } from "react-router-dom";
import { Compass, Home, ArrowLeft } from "lucide-react";
import Button from "../UI/Button";

function Error() {
  const error = useRouteError();
  const statusCode = error?.status || 404;

  const message =
    statusCode === 404
      ? "The page you are looking for has been moved or no longer exists. Let's get you back on track."
      : "We encountered an unexpected issue. Let's get you back to safety.";

  return (
    <div className="relative min-h-screen bg-[#F5F5F4] flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.05]">
        <span className="text-[20rem] md:text-[40rem] font-black text-primary-coffee tracking-tighter">
          {statusCode}
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">
        <div className="mb-8 p-5 rounded-full bg-primary-coffee/5 border border-primary-coffee/10">
          <Compass
            className="w-10 h-10 text-primary-coffee opacity-80"
            strokeWidth={1.5}
          />
        </div>

        <p className="text-primary-coffee font-bold tracking-[0.25em] text-sm uppercase mb-4 opacity-70">
          Error {statusCode}
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-coffee mb-6 tracking-tight">
          {statusCode === 404 ? "Lost your way?" : "Something went wrong."}
        </h1>

        <p className="text-muted-coffee text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-medium">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Button to="/" type="primary" icon={<Home size={18} />}>
            Back to Home
          </Button>

          <Button to="-1" type="secondary" icon={<ArrowLeft size={18} />}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;
