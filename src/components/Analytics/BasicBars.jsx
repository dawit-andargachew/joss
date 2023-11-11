import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009A6A", // Primary color for "pass" bars
    },
    secondary: {
      main: "#99E6CE", // Secondary color for "fail" bars
    },
  },
});

export default function CoursePassFailChart() {
  const courses = [
    { course: "Programming I", pass: 67, fail: 13 },
    { course: "Calculus I", pass: 50, fail: 30 },
    { course: "OOP", pass: 55, fail: 25 },
    { course: "Linear Algebra", pass: 62, fail: 18 },
    { course: "Networking", pass: 71, fail: 9 },
    { course: "Data Base", pass: 76, fail: 4 },
    { course: "Operating System", pass: 68, fail: 12 },
  ];

  // Extracting data for the chart
  const xAxis = [
    { scaleType: "band", data: courses.map((course) => course.course) },
  ];
  const series = [
    {
      data: courses.map((course) => course.pass),
      color: "#009A6A",
      barRoundness: 1, // Set bar roundness to 1 for fully rounded bars
    },
    {
      data: courses.map((course) => course.fail),
      color: "#99E6CE",
      barRoundness: 1, // Set bar roundness to 1 for fully rounded bars
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="rounded-md p-0 m-0 shadow-xl ">
        <BarChart
          xAxis={xAxis}
          series={series}
          width={900}
          height={450}
          colorScheme={["primary", "secondary"]}
        />
      </div>
      <div className="flex mt-5 mx-5 gap-10">
        {/* pass */}
        <div className="flex items-center gap-1">
          <span
            className="bg-primary inline-block w-5 h-5 rounded-full"
            style={{ backgroundColor: "#009A6A" }}
          ></span>{" "}
          <p>pass</p>
        </div>

        {/* fail */}
        <div className="flex items-center gap-1">
          <span
            className="bg-secondary inline-block w-5 h-5 rounded-full"
            style={{ backgroundColor: "#99E6CE" }}
          ></span>{" "}
          <p>fail</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
