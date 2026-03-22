//Write your code here
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};
// Task 3: Log Attendee Name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Task 4: Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Task 5: Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Task 6: Update Ticket Price
// Note: The lab instructions in image 1001269273 ask for a 
// new 'ticket type' parameter but to update the 'ticketPrice'.
// I've named the parameter 'newPrice' for clarity.
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Task 7: Remove Event Property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Task 8: Add Checked-In Property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

logAttendeeName(attendee);
updateTicketType(attendee, "Regular");
addCheckedInProperty(attendee);
console.log(attendee);





//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};