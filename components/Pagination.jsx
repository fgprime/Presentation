"use client";

import { useState } from "react";

export default function Pagination({ numberOfPage, numberOfAllPages }) {
  return (
    <div className="w-full flex justify-center p-4 ">
      {numberOfPage > 1 && (
        <p>
          {numberOfPage} von {numberOfAllPages}
        </p>
      )}
    </div>
  );
}
