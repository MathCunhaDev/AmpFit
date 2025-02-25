import { motion } from "framer-motion";
import styled from "styled-components";

export const FloatingButton = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => (theme.isDark ? "#333" : "#fff")};
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease-in-out;
`;
