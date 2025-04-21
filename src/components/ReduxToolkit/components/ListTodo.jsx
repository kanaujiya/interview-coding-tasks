import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, updateTodo } from "../feature/todoSlice";
export const ListTodo = () => {
  const todos = useSelector((state) => state.todos);
  const [editData, setEditData] = useState({ id: "", task: "" });
  const dispatch = useDispatch();

  function removeTodoHandler(id) {
    dispatch(removeTodos(id));
  }

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editData));
    setEditData({ id: "", task: "" });
  };
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Body>
            {editData.id && (
              <Form onSubmit={updateTodoHandler}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter a Task"
                    value={editData.task}
                    onChange={(e) =>
                      setEditData({ ...editData, task: e.target.value })
                    }
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
                    Save
                  </Button>
                </InputGroup>
              </Form>
            )}

            <ListGroup>
              {todos?.map((todo, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Form.Check type="checkbox" label={todo.task} />

                  <div>
                    <Button
                      variant="link"
                      style={{ color: "crimson" }}
                      onClick={() => setEditData(todo)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="link"
                      style={{ color: "crimson" }}
                      onClick={() => removeTodoHandler(todo.id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
