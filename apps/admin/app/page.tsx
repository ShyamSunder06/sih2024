import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  return (
   <div>
    {redirect("/api/auth/signin")}
  

   
   
   </div>
  );
}
