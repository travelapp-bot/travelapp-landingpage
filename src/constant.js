export function convertSecondsToDate(seconds) {
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    return formattedDate;
  }