export default function formatTime(timeInSeconds: number) {
  const seconds = `${timeInSeconds % 60}`.padStart(2, "0");
  const minutes = `${Math.floor((timeInSeconds / 60) % 60)}`.padStart(2, "0");
  const hours = `${Math.floor(timeInSeconds / 3600)}`.padStart(2, "0");

  if (timeInSeconds >= 3600) {
    return `${hours} : ${minutes} : ${seconds}`;
  } else {
    return `${minutes} : ${seconds}`;
  }
}
