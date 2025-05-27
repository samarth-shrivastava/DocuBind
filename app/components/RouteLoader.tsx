'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RouteLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Adjust delay as needed
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader /> : null;
}