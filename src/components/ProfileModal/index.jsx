import React, { useState } from "react";

const ProfileModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Early return to avoid rendering the modal if it's not open.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-10 w-[1043px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-5xl text-gray-500 font-light hover:text-gray-800 pt-2 pr-3"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-[#3F3F3F]">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileModal;
