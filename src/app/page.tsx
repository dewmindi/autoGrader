import Image from "next/image";
import { div } from "framer-motion/client";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
import { IconHome, IconPaperBag } from "@tabler/icons-react";
import { BadgeMark } from "@mui/material";
import ExamSection from "./sections/Exam/page";

export default function Home() {
  return (
  <div className="h-screen"> 
    <Sidebar>
      <SidebarBody>
        <SidebarLink link={{ label: "Dashboard", href: "/", icon: <IconHome /> }} />
        <SidebarLink link={{ label: "Exam", href: "sections/Exam", icon: <IconHome /> }} />
        <SidebarLink link={{ label: "Evaluate", href: "sections/Evaluate", icon: <IconPaperBag /> }} />
        {/* Add more SidebarLink components as needed */}
      </SidebarBody>
    </Sidebar>
  </div>
  );
}
