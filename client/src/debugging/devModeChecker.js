import process from "process";

const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

console.log(process.env.NODE_ENV);

export default function isDev() {
  return development;
}
