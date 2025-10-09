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
          <XAxis stroke="##627382" type="number" />
          <YAxis stroke="##627382" dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" barSize={20} />
        </BarChart>
      </div>
      <div className="md:hidden">
        <BarChart
          width={370}
          height={250}
          data={filteredData.ratings}
          layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" barSize={20} />
        </BarChart>
      </div>
    </>
  );
};

export default RatingChart;
