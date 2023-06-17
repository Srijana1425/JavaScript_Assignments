function monthNameToMonth(monthName) {
    const months = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };
    return months[monthName.toLowerCase()]
  }
  
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();  
  }
  
  function formatDaysInMonth(year, monthName) {
    let month = monthNameToMonth(monthName);
    let days = getDaysInMonth(year, month);
    monthName = monthName.toUpperCase().slice(0,1) + monthName.toLowerCase().slice(1);
    return `${monthName} ${year} has ${days} days`;
  }
  
  let monthName = prompt('Enter the month name:');
  let year = prompt('Enter the year:');
  console.log(formatDaysInMonth(year, monthName))
