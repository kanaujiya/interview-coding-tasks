import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { ListTodo } from "./ListTodo";
import { useDispatch } from "react-redux";
import { addTodos } from "../feature/todoSlice";
export const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const AddTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos(task));
    setTask("");
  };
  return (
    <div
      style={{
        backgroundColor: "crimson",
        height: "100vh",
        paddingTop: "3rem",
      }}
    >
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Card className="shadow">
              <Card.Body>
                <Form onSubmit={AddTodoHandler}>
                  <Form.Group className="mb-3">
                    <Form.Label>New Todo:</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Enter a new task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                      />
                      <Button
                        variant="hotpink"
                        type="submit"
                        style={{
                          backgroundColor: "crimson",
                          color: "white",
                          border: "none",
                        }}
                      >
                        Add
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ListTodo />
      </Container>
    </div>
  );
};
