"use client";

import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const getNavbar = () => {
    if (isPublicRoute) {
      return null;
    }
    return <Navbar />;
  };

  const getFooter = () => {
    if (isPublicRoute) {
      return null;
    }
    return <Footer />;
  };

  const getContent = () => {
    if (isPublicRoute) {
      return null;
    }
    return <>{children}</>;
  };

  const getCurrentUser = async () => {
    try {
      const response: any = await fetchUsers();
      if (response.error) throw new Error(response.error.message);
    } catch (error) {
      console.log(error);
    } finally {
      return;
    }
  };

  useEffect(() => {
    if (!isPublicRoute) getCurrentUser();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <div>
      {getNavbar()}
      </div>
      <div>
      {getContent()}
      </div>
      <div>
      {getFooter()}
      </div>
    </div>
  );
}

export default LayoutProvider;
