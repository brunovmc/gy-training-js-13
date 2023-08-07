function dateToISO(dateTimeString) {
  const dateString = dateTimeString.split(' ')[0];
  const dateParts = dateString.split('/');
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}

module.exports = {
  dateToISO
};
