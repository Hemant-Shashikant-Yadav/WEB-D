import React from "react";
import {
  Home,
  Phone,
  MessageCircle,
  Mail,
  Edit,
  Instagram,
  MessageSquare,
  MoreHorizontal,
  Bell,
  Star,
  TrendingUp,
  Calendar,
  Clock,
  Activity,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";

const App = () => {
  const services = [
    // {
    //   icon: <Home size={24} />,
    //   name: "Home",
    //   color: "bg-sky-100 text-sky-600",
    // },
    {
      icon: <Phone size={24} />,
      name: "Phone",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <MessageCircle size={24} />,
      name: "WhatsApp",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Mail size={24} />,
      name: "Email",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: <Edit size={24} />,
      name: "Edit",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <square-code size={24} />,
      name: "App / Web",
      color: "bg-rose-100 text-rose-600",
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      color: "bg-rose-100 text-rose-600",
    },
    {
      icon: <MessageSquare size={24} />,
      name: "SMS",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <MoreHorizontal size={24} />,
      name: "More",
      color: "bg-slate-100 text-slate-600",
    },

  ];

  const stats = [
    {
      icon: <Activity size={20} />,
      label: "Active",
      value: "24",
      trend: "+12%",
    },
    { icon: <Star size={20} />, label: "Rating", value: "4.8", trend: "+0.3" },
    {
      icon: <TrendingUp size={20} />,
      label: "Growth",
      value: "32%",
      trend: "+8%",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* Header with Animated Gradient */}
      <header className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-sm">
              <Home className="text-sky-500" size={24} />
            </div>
            <div className="text-white">
              <p className="text-sm font-medium opacity-90">Welcome back</p>
              <h1 className="text-xl font-bold">Sankpal Industries</h1>
            </div>
          </div>
          <div className="flex gap-3">
              <Bell className="text-white" size={26} />
            {/* <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm"> */}
            
            {/* </button> */}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3"
            >
              <div className="flex items-center gap-2 text-white/80 mb-1">
                {stat.icon}
                <span className="text-xs">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-xl font-bold">
                  {stat.value}
                </span>
                <span className="text-green-300 text-xs">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Active Services */}
      <section className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 font-bold">Active Services</h2>
          <button className="text-sky-500 text-sm font-medium">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-200`}
              >
                <div className="transition-transform">{service.icon}</div>
              </div>
              <span className="text-xs text-gray-600 mt-2 font-medium">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* New Service Banner */}
      <div className="mx-6 my-6">
        <Card className="bg-gradient-to-r from-sky-500 to-blue-600 text-white overflow-hidden">
          <CardContent className="p-6 flex items-center justify-between relative">
            <div>
              <h3 className="font-bold text-lg mb-1">Upgrade Now</h3>
              <p className="text-sm text-sky-100">
                Get access to premium features
              </p>
            </div>
            <button className="bg-white text-sky-500 px-4 py-2 rounded-xl font-medium text-sm hover:bg-sky-50 transition-colors">
              Upgrade
            </button>
            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-30 -mr-16 -mt-16" />
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <section className="p-6">
        <h2 className="text-gray-800 font-bold mb-4">Recent Activities</h2>
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                <Clock className="text-sky-500" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-700 font-medium">New Update</h3>
                  <span className="text-xs text-sky-500 font-medium">
                    Just now
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  System maintenance completed successfully
                </p>
              </div>
              <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <MoreHorizontal size={18} className="text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4 flex gap-8">
        {["home", "message", "phone", "mail"].map((item, index) => (
          <button
            key={item}
            className={`flex flex-col items-center gap-1 ${
              index === 0 ? "text-sky-500" : "text-gray-400"
            }`}
          >
            {index === 0 && <Home size={24} />}
            {index === 1 && <MessageCircle size={24} />}
            {index === 2 && <Phone size={24} />}
            {index === 3 && <Mail size={24} />}
            <div
              className={`w-1 h-1 rounded-full ${
                index === 0 ? "bg-sky-500" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
