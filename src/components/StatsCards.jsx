function StatCard({ state }) {
  const { label, value, icon: Icon } = state;

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-200 border border-secondary-coffee">
      <div className="flex items-start justify-between">
        <div className="p-2 bg-seborder-secondary-coffee rounded-lg">
          <Icon size={18} className="text-primary-coffee" />
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-muted-coffee font-medium mb-1">
          {label}
        </p>
        <p
          className={
            "font-serif font-bold text-primary-coffee leading-tight text-xl "
          }
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
