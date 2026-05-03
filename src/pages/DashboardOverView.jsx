import {
  FileDown,
  CalendarDays,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Award,
} from "lucide-react";
import Button from "../UI/Button";
import StatCard from "../components/StatsCards";
import RecentOrders from "../components/RecentOrders";
import InventoryStatus from "../components/InventoryStatus";
import FullPageSpinner from "../UI/FullPageSpinner";
import QueryError from "../UI/QueryError";
import { useQueries } from "@tanstack/react-query";
import {
  getOrdersTodayNumber,
  getTotalRevenue,
  getAvgOrderValue,
  getTopRoast,
  getRecentOrders,
} from "../api/overViewApi";
import { formatCurrency } from "../utils/helpers";

function DashboardOverview() {
  const results = useQueries({
    queries: [
      { queryKey: ["total_revenue"], queryFn: getTotalRevenue },
      { queryKey: ["today_orders"], queryFn: getOrdersTodayNumber },
      { queryKey: ["avg_order_value"], queryFn: getAvgOrderValue },
      { queryKey: ["top_roast"], queryFn: getTopRoast },
      { queryKey: ["recent_orders"], queryFn: getRecentOrders },
    ],
  });

  const [
    { data: revenueData },
    { data: ordersData },
    { data: avgData },
    { data: roastData },
    { data: recentOrders },
  ] = results;

  const isLoading = results.some((q) => q.isLoading);
  const error = results.find((q) => q.error)?.error;

  if (isLoading) return <FullPageSpinner />;
  if (error) return <QueryError error={error} />;

  const stats = [
    {
      label: "Total Revenue",
      value: `${formatCurrency(revenueData?.total_revenue) || 0}`,
      icon: DollarSign,
    },
    {
      label: "Orders Today",
      value: ordersData?.orders_today || 0,
      icon: ShoppingBag,
    },
    {
      label: "Average Order Value",
      value: `${formatCurrency(avgData?.avg_order_value) || 0}`,
      icon: TrendingUp,
    },
    {
      label: "Top Roast",
      value: roastData?.product_name || "N/A",
      icon: Award,
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary-coffee">
            Roastery Overview
          </h1>
          <p className="text-sm text-muted-coffee mt-0.5">
            Real-time performance of your artisanal batches.
          </p>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} state={s} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentOrders orders={recentOrders} />
          </div>
          <div className="lg:col-span-1">
            <InventoryStatus />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardOverview;
