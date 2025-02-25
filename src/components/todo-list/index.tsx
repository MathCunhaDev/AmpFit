import { Row, Col, Checkbox, Spin, Button } from "antd";
import { StyledLayout, StyledCard, StyledTitle } from "./styles";
import { IDailyGoals } from "../../models/todos";
import { useState } from "react";

interface IDailyGoalsList {
  data: IDailyGoals[];
  isLoading: boolean;
}

export const DailyGoalsList = ({ data, isLoading }: IDailyGoalsList) => {
  const [visibleTodos, setVisibleTodos] = useState(5);

  const handleLoadMore = () => {
    setVisibleTodos((prev) => prev + 5);
  };

  if (isLoading) return <Spin size="large" />;

  return (
    <StyledLayout>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8} xl={6}>
          <StyledCard>
            <StyledTitle level={2}>Your daily goals!</StyledTitle>
            <Row gutter={16}>
              {data?.slice(0, visibleTodos).map((todo) => (
                <Col span={24} key={todo.id}>
                  <StyledCard>
                    <Checkbox checked={todo.completed}>{todo.title}</Checkbox>
                  </StyledCard>
                </Col>
              ))}
            </Row>
            {visibleTodos < (data?.length || 0) && (
              <Button type="primary" block onClick={handleLoadMore}>
                See more
              </Button>
            )}
          </StyledCard>
        </Col>
      </Row>
    </StyledLayout>
  );
};
