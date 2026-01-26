import React, { useState, useMemo } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Badge,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { taskConfig } from "../config/taskConfig";
import {
  FaSearch,
  FaCode,
  FaLayerGroup,
  FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = taskConfig.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Group tasks by category
  const groupedTasks = useMemo(() => {
    return taskConfig.reduce((acc, task) => {
      (acc[task.category] = acc[task.category] || []).push(task);
      return acc;
    }, {});
  }, []);

  const categories = Object.keys(groupedTasks).sort();
  const totalTasks = taskConfig.length;
  const totalCategories = categories.length;

  return (
    <div className="pb-5">
      {/* Hero Section */}
      <div className="hero-gradient text-center mb-5 mx-n4 mt-n4 shadow-sm py-4">
        <Container>
          <h2 className="fw-bold mb-4">Enterprise Playground</h2>

          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <InputGroup className="shadow-sm border-0 rounded-3 overflow-hidden">
                <InputGroup.Text className="bg-white border-0 ps-3">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search tasks or categories..."
                  className="border-0 py-2 ps-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ boxShadow: "none" }}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Compact Stats Overview */}
      <div className="d-flex justify-content-center gap-4 mb-5 mt-n5">
        <div className="bg-white px-4 py-2 rounded-pill shadow-sm border d-flex align-items-center">
          <FaClipboardList className="text-primary me-2" />
          <span className="fw-bold me-1">{totalTasks}</span>
          <span className="text-muted small">Tasks</span>
        </div>
        <div className="bg-white px-4 py-2 rounded-pill shadow-sm border d-flex align-items-center">
          <FaLayerGroup className="text-success me-2" />
          <span className="fw-bold me-1">{totalCategories}</span>
          <span className="text-muted small">Categories</span>
        </div>
      </div>

      {!searchTerm && (
        <>
          {/* Category State Cards */}
          <Row className="g-3 mb-5">
            {categories.map((category) => (
              <Col md={4} lg={3} key={category}>
                <Card
                  className="enterprise-card h-100 border-0 text-center p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSearchTerm(category);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                >
                  <div className="text-primary small fw-bold mb-1">
                    {category}
                  </div>
                  <div className="h5 fw-bold mb-0">
                    {groupedTasks[category].length}
                  </div>
                  <div className="text-muted extra-small">Questions</div>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      <hr className="my-5 opacity-10" />

      {/* Task List */}
      {searchTerm && (
        <div className="mb-4 d-flex align-items-center justify-content-between">
          <h6 className="mb-0 text-muted">
            Filtered by:{" "}
            <span className="text-primary fw-bold">"{searchTerm}"</span>
          </h6>
          <Badge bg="primary" className="rounded-pill px-3">
            {filteredTasks.length} Results
          </Badge>
        </div>
      )}

      {filteredTasks.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredTasks.map((task) => (
            <Col key={task.id}>
              <Card
                className="enterprise-card h-100 border-0"
                onClick={() => navigate(task.path)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="bg-light p-2 rounded text-primary">
                      <FaCode />
                    </div>
                    <Badge
                      bg="light"
                      text="primary"
                      className="category-pill border-0"
                    >
                      {task.category}
                    </Badge>
                  </div>
                  <Card.Title className="fw-bold h6 mb-2">
                    {task.title}
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    {task.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center py-5 bg-white rounded shadow-sm">
          <h6 className="text-muted mb-0">No matching tasks found.</h6>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
