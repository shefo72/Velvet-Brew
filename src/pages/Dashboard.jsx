import {
  FileDown,
  CalendarDays,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Award,
} from "lucide-react";

import Topbar from "../components/Topbar";
import RecentOrders from "../components/RecentOrders";
import InventoryStatus from "../components/InventoryStatus";
import StatCard from "./../components/StatsCards";

import Button from "./../UI/Button";

const stats = [
  {
    label: "Total Revenue",
    value: "$14,280.00",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    label: "Orders Today",
    value: "128",
    change: "+4.2%",
    icon: ShoppingBag,
  },
  {
    label: "Average Order Value",
    value: "$42.50",
    change: "Stable",
    icon: TrendingUp,
  },
  {
    label: "Top Roast",
    value: "Dark Sumatra",
    change: null,
    icon: Award,
  },
];

const orders = [
  {
    id: "#VB-9421",
    customer: "Eleanor Shellstrop",
    items: "2x Ethiopian Yirgacheffe",
    status: "Roasting",
    amount: "$38.00",
  },
  {
    id: "#VB-9420",
    customer: "Tahani Al-Jamil",
    items: "1x Colombian Excelso",
    status: "In Route",
    amount: "$24.50",
  },
  {
    id: "#VB-9419",
    customer: "Chidi Anagonye",
    items: "3x Kenya AA",
    status: "Completed",
    amount: "$72.00",
  },
  {
    id: "#VB-9221",
    customer: "Eleanor Shellstrop",
    items: "2x Ethiopian Yirgacheffe",
    status: "Roasting",
    amount: "$38.00",
  },
  {
    id: "#VB-9418",
    customer: "Jason Mendoza",
    items: "1x French Roast",
    status: "Completed",
    amount: "$19.50",
  },
];

function Dashboard() {
  return (
    <div className="flex h-screen bg-[#FFF8F2] overflow-hidden font-sans">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
              <div>
                <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary-coffee">
                  Roastery Overview
                </h1>
                <p className="text-sm text-muted-coffee mt-0.5">
                  Real-time performance of your artisanal batches.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button type="secondary">
                  <FileDown size={15} />
                  Export Report
                </Button>
                <Button>
                  <CalendarDays size={15} />
                  Roast Schedule
                </Button>
              </div>
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
                <RecentOrders orders={orders} />
              </div>
              <div className="lg:col-span-1">
                <InventoryStatus />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
