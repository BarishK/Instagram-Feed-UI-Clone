import SidebarMenu from "./SiderbarMenu";

export default function SiderBar() {
  return (
    <div className="hidden md:block p-3 sticky top-0 h-fit">
      <SidebarMenu />
    </div>
  );
}
