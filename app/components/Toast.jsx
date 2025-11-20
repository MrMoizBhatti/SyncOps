import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-20 right-4 px-4 py-3 rounded-lg flex items-center shadow-lg z-50 text-white 
        ${type === "success" ? "bg-[#0fbab1]" : "bg-red-600"} 
        transition-all duration-300 ease-in-out transform
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      style={{ minWidth: "250px", maxWidth: "90%" }}
    >
      {type === "success" ? (
        <CheckCircle size={20} className="mr-3 flex-shrink-0" />
      ) : (
        <XCircle size={20} className="mr-3 flex-shrink-0" />
      )}
      <span className="flex-1 text-sm sm:text-lg">{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-white hover:text-gray-200 focus:outline-none"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
