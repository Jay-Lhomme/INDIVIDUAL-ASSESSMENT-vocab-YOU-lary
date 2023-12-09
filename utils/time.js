const timeSubmitted = () => {
  const date = new Date();

  const minutes = date.getMinutes();
  const hour = date.getHours();

  const timeStamp = `${hour}:${minutes}`;
  return timeStamp;
};

export default timeSubmitted;
