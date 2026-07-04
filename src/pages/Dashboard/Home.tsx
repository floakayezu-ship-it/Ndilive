import ContinueWatching from "../../components/video/ContinueWatching";
import Videoadvert from "../../components/video/videoadvert";
import LiveChannels from "../../components/video/livechannels";
import Biblestudy from "../../components/video/biblestudy";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-6 gap-4 md:gap-3">
        <div className="col-span-12 space-y-6">
          <Videoadvert />

          <ContinueWatching />
        </div>

        <div className="col-span-12">
          <LiveChannels />
        </div>

        <div className="col-span-12">
          <Biblestudy />
        </div>
      </div>
    </>
  );
}
