import React from 'react';
import Styled from 'styled-components/native';
import TodoListView from './TodoListView';
import AddTodo from './AddTodo';

interface Props {}

const Todo = ({}: Props) => {
  return (
    <Container>
      <TodoListView />
      <AddTodo />
    </Container>
  );
};

export default Todo;

const Container = Styled.View`
flex: 1;
`;
