import Image from "next/image";
import DashboardSection from "./Sidebar/sections/Dashboard";
import SidebarSection from "./Sidebar/sections/Sidebar";
import { div } from "framer-motion/client";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
import { IconHome, IconPaperBag } from "@tabler/icons-react";
import { BadgeMark } from "@mui/material";

export default function Home() {
  return (
  <div className="h-screen">  
    <Sidebar>
      <SidebarBody>
        <SidebarLink link={{ label: "Dashboard", href: "/", icon: <IconHome /> }} />
        <SidebarLink link={{ label: "Exam", href: "/about", icon: <IconHome /> }} />
        <SidebarLink link={{ label: "Evaluate", href: "/about", icon: <IconPaperBag /> }} />
        {/* Add more SidebarLink components as needed */}
      </SidebarBody>
    </Sidebar>
  </div>
  );
}
