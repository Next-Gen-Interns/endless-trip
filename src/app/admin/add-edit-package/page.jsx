import AdminTabs from "@/components/admin/AdminTabs";
import AddEditPackage from "@/components/admin/AddEditPackage";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <AdminTabs />
      <AddEditPackage />
    </>
  );
}
