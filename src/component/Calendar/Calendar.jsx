import React from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

function Calendar({ resourceList, eventList }) {
  return (
    <FullCalendar
      plugins={[resourceTimeGridPlugin]}
      initialView="resourceTimeGridDay"
      nowIndicator={true}
      resources={resourceList}
      events={eventList}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "resourceTimeGridDay",
      }}
    />
  );
}

export default Calendar;
