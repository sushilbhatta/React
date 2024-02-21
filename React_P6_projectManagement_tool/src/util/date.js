var today = new Date();

// Get the current date, month, and year
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-indexed, so we add 1
var year = today.getFullYear();

// Format the date as a string (optional)
export var formattedDate =
  year +
  "-" +
  (month < 10 ? "0" : "") +
  month +
  "-" +
  (day < 10 ? "0" : "") +
  day;
