// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const RatingChart = ({ filteredData }) => {
//   console.log(filteredData.ratings);
//   return (
//     <div>
//       <ResponsiveContainer width="100%" height="100%">
//         <ComposedChart
//           layout="vertical"
//           width={500}
//           height={400}
//           data={filteredData.ratings}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}>
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis type="number" />
//           <YAxis dataKey="name" type="category" scale="band" />
//           <Tooltip />
//           <Legend />
//           <Area dataKey="count" fill="#8884d8" stroke="#8884d8" />
//           <Bar dataKey="name" barSize={20} fill="#413ea0" />
//           <Line dataKey="count" stroke="#ff7300" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RatingChart;

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ filteredData }) => {
  return (
    <>
      <div className="hidden md:flex">
        <BarChart
          width={730}
          height={250}
          data={filteredData.ratings}
          layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
          {/* <Bar dataKey="count" fill="#82ca9d" /> */}
        </BarChart>
      </div>
      <div className="md:hidden">
        <BarChart
          width={400}
          height={250}
          data={filteredData.ratings}
          layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" barSize={30} />
          {/* <Bar dataKey="count" fill="#82ca9d" /> */}
        </BarChart>
      </div>
    </>
  );
};

export default RatingChart;
