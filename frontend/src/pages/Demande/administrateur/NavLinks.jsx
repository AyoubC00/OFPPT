import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("list-demand");

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard/demandes/bac":
        setActiveTab("bac");
        break;
      case "/dashboard/demandes/historique":
        setActiveTab("historique");
        break;
      default:
        setActiveTab("list-demand");
        break;
    }
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-screen-md mx-auto">
        <div className="flex space-x-4 rounded-full bg-gray-200 p-2">
          <div
            className={`flex-1 text-center cursor-pointer py-2 px-4 rounded-full ${
              activeTab === "list-demand"
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick("list-demand")}
          >
            <Link
              to=""
              className={`block font-semibold ${activeTab === "list-demand" ? "text-white" : "text-gray-500"}`}
            >
              Liste Demandes
            </Link>
          </div>
          <div
            className={`flex-1 text-center cursor-pointer py-2 px-4 rounded-full ${
              activeTab === "bac"
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick("bac")}
          >
            <Link
              to="/dashboard/demandes/bac"
              className={`block font-semibold ${activeTab === "bac" ? "text-white" : "text-gray-500"}`}
            >
              Bac
            </Link>
          </div>
          <div
            className={`flex-1 text-center cursor-pointer py-2 px-4 rounded-full ${
              activeTab === "historique"
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick("historique")}
          >
            <Link
              to="/dashboard/demandes/historique"
              className={`block font-semibold ${activeTab === "historique" ? "text-white" : "text-gray-500"}`}
            >
              Historique
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
