import { Link, useNavigate } from "react-router-dom";

// type =>  primary, secondary, pillPrimary, pillSecondary, squareOutline
// disabled => true or false
// onClick => funtion (optional)
// to => path (optional)
// icon => React element (optional)

function Button({
  children,
  type = "primary",
  disabled = false,
  onClick,
  to,
  icon,
}) {
  const navigate = useNavigate();

  const base =
    "inline-flex items-center justify-center gap-2 cursor-pointer font-semibold transition-all duration-300 disabled:cursor-not-allowed focus:ring-2 focus:ring-offset-2 focus:outline-none text-sm md:text-base";

  const styles = {
    primary: `${base} bg-primary-coffee text-white hover:bg-coffee-hover focus:ring-coffee-hover rounded-lg md:rounded-xl px-4 py-2.5 md:px-6 md:py-3.5`,
    secondary: `${base} bg-transparent text-primary-coffee border-2 border-primary-coffee hover:bg-secondary-coffee-hover focus:ring-secondary-coffee-hover rounded-lg md:rounded-xl px-4 py-2 md:px-6 md:py-3`,
    pillPrimary: `${base} bg-primary-coffee text-white hover:bg-coffee-hover focus:ring-primary-coffee rounded-full px-5 py-2.5 md:px-8 md:py-3.5`,
    pillSecondary: `${base} bg-transparent text-primary-coffee border border-gray-200 hover:bg-gray-50 focus:ring-gray-200 rounded-full px-5 py-2.5 md:px-8 md:py-3.5`,
    squareOutline: `${base} bg-transparent text-primary-coffee border border-primary-coffee uppercase tracking-widest rounded-none text-xs md:text-sm px-5 py-3 md:px-8 md:py-4`,
  };

  if (to) {
    if (to === "-1")
      return (
        <button onClick={() => navigate(-1)} className={styles[type]}>
          {icon && (
            <span className="flex items-center justify-center">{icon}</span>
          )}

          {children}
        </button>
      );

    return (
      <Link to={to} className={styles[type]}>
        {icon && (
          <span className="flex items-center justify-center">{icon}</span>
        )}

        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {icon && (
          <span className="flex items-center justify-center">{icon}</span>
        )}

        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
