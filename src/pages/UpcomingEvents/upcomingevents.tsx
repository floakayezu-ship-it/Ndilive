import PageMeta from "../../components/common/PageMeta";
import Calendar from "../../components/filters/calendar";
import Upcominghero from "../../components/cards/upcominghero";
import TodayEvents from "../../components/cards/todayupcoming";
import TomorrowEvents from "../../components/cards/tomorrowupcoming";
import ThisWeekEvents from "../../components/cards/weekupcoming";
import ThisMonthEvents from "../../components/cards/monthupcoming";

export default function UpcomingEvents() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-6 gap-4 md:gap-3">
        <div className="col-span-12 space-y-6">
          <Calendar />

          <Upcominghero />
        </div>

        <div className="col-span-12">
          <TodayEvents />
          <TomorrowEvents />
        </div>

        <div className="col-span-12">
          <ThisWeekEvents />
        </div>

          <div className="col-span-12">
          <ThisMonthEvents />

        </div>
      </div>
    </>
  );
}
