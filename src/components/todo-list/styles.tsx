import { Layout, Card, Typography } from "antd";

const { Title } = Typography;

import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  padding: 20px;
  background: ${({ theme }) => (theme.isDark ? "#333" : "#fff")};
  transition: background 0.3s ease-in-out;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
`;

export const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
