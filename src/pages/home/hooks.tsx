import { useQuery } from "@tanstack/react-query";
import { TodosService } from "../../store/services/todos";
import { IDailyGoals } from "../../models/todos";

export const useHome = () => {
  const { data: todosData, isLoading: isLoadingTodos } = useQuery({
    queryKey: ["todos-list"],
    queryFn: () => TodosService.getAll<IDailyGoals[]>(),
  });

  return { todosData, isLoadingTodos };
};
