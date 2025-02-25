import { WeeklyProgressChart } from "../../components/chart";
import { ThemeToggle } from "../../components/theme-toggle";
import { DailyGoalsList } from "../../components/todo-list";
import { useHome } from "./hooks";

import { Container, StyledTitle } from "./styles";

export const Home = () => {
  const { todosData, isLoadingTodos } = useHome();

  return (
    <Container>
      <StyledTitle>Welcome to AmpFit</StyledTitle>
      <WeeklyProgressChart />
      <DailyGoalsList
        data={todosData ? todosData : []}
        isLoading={isLoadingTodos}
      />
      <ThemeToggle />
    </Container>
  );
};
