import Feed from "./components/Feed";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <div className="min-h-full w-full flex justify-center">
      <div className="w-full lg:w-3/4">
        <Stories />
        <Feed />
      </div>
    </div>
  );
}
