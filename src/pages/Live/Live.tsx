import Categories from "../../components/filters/categories";
import Vertvideocards from "../../components/video/vertvideocards";
import LiveChannels from "../../components/video/livechannels";
import Biblestudy from "../../components/video/biblestudy";
import PageMeta from "../../components/common/PageMeta";


export default function live() {
  return (
        <>
          <PageMeta
            title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
            description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
          />
          <div className="grid grid-cols-6 gap-4 md:gap-3">
            <div className="col-span-12 space-y-6">
              <Categories/>
    
              <Vertvideocards />
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
    
   