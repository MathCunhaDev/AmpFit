import { Layout, Card, Typography } from "antd";
import styled from "styled-components";

const { Title: AntTitle } = Typography;

export const StyledLayout = styled(Layout)`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => (theme.isDark ? "#333" : "#fff")};
  transition: background 0.3s ease-in-out;
`;

export const StyledTitle = styled(AntTitle)`
  text-align: center;
`;

export const StyledCard = styled(Card)`
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
