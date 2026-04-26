import { Link, useRouteError } from "react-router-dom";
import { Coffee, Home, ArrowLeft } from "lucide-react";

import Button from "../UI/Button";

function Error() {
  const error = useRouteError();

  const message =
    error?.status === 404
      ? "It looks like the page you are looking for has been moved or no longer exists. Let's get you back to a fresh brew."
      : "We couldn't find the page you're looking for. Let's get you back to a fresh brew.";

  return (
    <div className="min-h-screen bg-[#F5F5F4] flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center text-center max-w-lg">
        <div className="w-24 h-24 bg-[#EAE4DB] rounded-full flex items-center justify-center mb-8 shadow-sm">
          <Coffee className="text-primary-coffee w-12 h-12" strokeWidth={1.5} />
        </div>

        {error?.status && (
          <p className="text-primary-coffee/40 font-bold tracking-widest mb-2 text-sm">
            ERROR {error.status}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-primary-coffee  mb-4">
          Page Not Found
        </h1>

        <p className="text-muted-coffee text-base md:text-lg mb-10 leading-relaxed">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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
