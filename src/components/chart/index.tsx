import React from "react";
import { Row, Col, Button } from "antd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { StyledCard, StyledLayout, StyledTitle } from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const WeeklyProgressChart: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Workout Progress (kg)",
        data: [50, 55, 60, 65, 70, 75, 80],
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Weekly Workout Progress",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <StyledLayout>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8} xl={6}>
          <StyledCard>
            <StyledTitle level={2}>Weekly Progress</StyledTitle>
            <Bar data={data} options={options} />
            <Button type="primary" block style={{ marginTop: "20px" }}>
              See more
            </Button>
          </StyledCard>
        </Col>
      </Row>
    </StyledLayout>
  );
};
