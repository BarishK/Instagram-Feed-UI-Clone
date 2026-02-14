import RightbarCard from "./RightbarCard";

export default function Righbar() {
  return (
    <div className="hidden xl:flex flex-1 p-5 w-1/5">
      <div className="flex flex-col gap-3">
        <RightbarCard isThisUser />
        <div className="flex justify-between items-center">
          <p className="font-bold">Recommendations</p>
          <span className="font-bold text-sm">See All</span>
        </div>
        <div className="flex flex-col gap-3">
          <RightbarCard username={"elmirsmlyv"} name={"Elmir Ismayilov"} />
          <RightbarCard username={"sabinasmylva"} name={"Sabina Ismayilova"} />
          <RightbarCard username={"galipoztrk"} name={"Galip Ozturk"} />
          <RightbarCard username={"kadirhanozk"} name={"Kadirhan Ozokutan"} />
          <RightbarCard username={"omeraltp"} name={"Omer Altintop"} />
        </div>
        <div>
          <p className="text-sm text-gray-600">© 2026 Instagram from Meta </p>
        </div>
      </div>
    </div>
  );
}
