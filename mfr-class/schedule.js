/*
  MYOFASCIAL RELEASE CLASS SCHEDULE
  =================================
  This is the only file you need to edit to update the calendar on the class page.

  TO CANCEL A CLASS
    Add a line inside "cancellations", like this:
      { date: "2026-12-22", reason: "Holiday break" },
    Dates are written YEAR-MONTH-DAY. Keep the quotes and the comma at the end.
    The reason is optional. Leave it as "" and the calendar simply says "No class".

  TO ADD A ONE-TIME EXTRA OR MAKE-UP CLASS
    Add a line inside "extraClasses", like this:
      { date: "2026-12-23", time: "4:15 to 5:15 PM", note: "Make-up class" },

  TO POST A SHORT ANNOUNCEMENT above the calendar
    Type it between the quotes in "announcement". Leave it as "" to show nothing.

  WHEN YOU ARE DONE
    Change "lastUpdated" to today's date so visitors know the calendar is current.
*/
window.MFR_SCHEDULE = {
  lastUpdated: "2026-11-16",

  // The regular weekly class
  classWeekday: "Tuesday",
  startTime: "4:15 PM",
  endTime: "5:15 PM",
  firstClass: "2026-09-08",
  lastClass: "", // leave "" while the class is ongoing

  announcement: "",

  cancellations: [
    { date: "2026-10-27", reason: "" },
    { date: "2026-11-03", reason: "" },
  ],

  extraClasses: [
  ],
};
