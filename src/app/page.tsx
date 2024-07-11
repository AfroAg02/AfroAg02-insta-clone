import Posts from "@/components/feed/Posts";
import Header from "@/components/header/Header";
import SuggestionsPanel from "@/components/suggestions/SuggestionPane";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-4/5">
          <Header />
          <Posts />
        </div>
        <SuggestionsPanel />
      </div>
    </>
  );
}
