import React from "react";
import PageHeader from "../../component/common/PageHeader/PageHeader";
import { FaPlus } from "react-icons/fa";
import { SlCloudDownload } from "react-icons/sl";
import { LuFileSpreadsheet } from "react-icons/lu";
import Calendar from "../../component/Calendar/Calendar";
import moment from "moment";

function Schedule() {
  const resourceList = [
    { id: "a", title: " " },
    { id: "b", title: " " },
  ];

  const eventList = [
    {
      title: "Online Interview with UI Candidate",
      start: `${moment().hours(8).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      end: `${moment().hours(10).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      resourceId: "a",
    },
    {
      title: "Replying email to applicants",
      start: `${moment().hours(8).minutes(30).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      end: `${moment().hours(10).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      resourceId: "b",
    },
    {
      title: "Online Interview with UI Candidate",
      start: `${moment().hours(10).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      end: `${moment().hours(11).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      resourceId: "a",
    },
    {
      title: "Online Interview with UI Candidate",
      start: `${moment().hours(10).minutes(30).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      end: `${moment().hours(12).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      resourceId: "b",
    },
    {
      title: "Online Interview with UI Candidate",
      start: `${moment().hours(14).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      end: `${moment().hours(15).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      resourceId: "a",
    },
    {
      title: "Online Interview with UI Candidate",
      start: `${moment().hours(14).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      end: `${moment().hours(15).minutes(0).seconds(0).format("YYYY-MM-DDTHH:mm:ss")}`,
      resourceId: "b",
    },
  ];

  return (
    <div>
      <div className="pb-5 border-b border-slate-300">
        <PageHeader
          headerIcon={<LuFileSpreadsheet color="#6366f1" />}
          title="Schedule"
          subTitle="Manage your schedule"
          primaryButtonText="Add Task"
          primaryButtonIcon={<FaPlus />}
          secondaryButtonText="Export"
          secondaryButtonIcon={<SlCloudDownload />}
          secondaryButtonIcon2={<></>}
        />
      </div>

      <div className="bg-white p-3">
        <Calendar resourceList={resourceList} eventList={eventList} />
      </div>
    </div>
  );
}

export default Schedule;
