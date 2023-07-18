const timeArr = ["17.00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const bookingAPI = (() => {
  const availableTimes = {};

  const fetchAPI = (date) => {
    if (!(date in availableTimes)) {
      availableTimes[date] = [...timeArr];
    }
    return availableTimes[date];
  };

  const submitAPI = (formData) => {
    if (formData.date in availableTimes) {
      availableTimes[formData.date] = availableTimes[formData.date].filter(
        (value) => value !== formData.time
      );
    }
    return true;
  };

  return {
    fetchAPI,
    submitAPI,
  };
})();

export default bookingAPI;