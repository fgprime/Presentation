"use client";

import { useEffect, useState } from "react";

export default function Navigation({ pages }) {
  const [page, setPage] = useState(0);

  const navigate = () => {
    window.scrollTo(0, page * window.innerHeight);
  };

  const keyHandler = (event) => {
    switch (event.key) {
      case "j":
        page < pages - 1 && setPage(page + 1);
        break;
      case "k":
        page > 0 && setPage(page - 1);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  });

  useEffect(() => {
    navigate();
  }, [page, navigate]);

  return <div></div>;
}
