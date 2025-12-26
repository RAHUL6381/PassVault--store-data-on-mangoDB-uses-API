import React from "react";

const SemiNav = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center mt-8 mb-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Securely Store & Manage Your Passwords
        </h2>

        <p className="text-gray-600 mt-2 text-sm">
          Add new entries below 👇 and keep them safe 🔐
        </p>
        <div className="mt-3 w-48 h- bg-linear-to-l from-green-400 to-emerald-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SemiNav;
