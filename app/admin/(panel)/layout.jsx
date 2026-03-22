import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminUI from "../AdminUI";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies(); 

  const token = cookieStore.get("adminToken")?.value;
  const role = cookieStore.get("role")?.value;

  if (!token || role !== "admin") {
    redirect("/admin");
  }

  return <AdminUI>{children}</AdminUI>;
}