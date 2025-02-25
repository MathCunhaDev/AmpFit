import { Typography } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";

const { Title } = Typography;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => (theme.isDark ? "#333" : "#fff")};
  transition: background 0.3s ease-in-out;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
`;
