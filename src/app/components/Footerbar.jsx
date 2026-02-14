import FooterbarMenu from "./FooterbarMenu";

export default function Footerbar() {
  return (
    <div className="md:hidden p-3 sticky bottom-0 bg-black z-50">
      <FooterbarMenu />
    </div>
  );
}
