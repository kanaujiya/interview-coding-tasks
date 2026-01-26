import React from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaGithub } from "react-icons/fa";
import { taskConfig } from "../config/taskConfig";

const Sidebar = ({ show, handleClose }) => {
  // Group tasks by category for sidebar
  const categories = [...new Set(taskConfig.map((task) => task.category))];

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <div
        className="d-none d-lg-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{
          width: "280px",
          minHeight: "100vh",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 fw-bold tracking-tight text-white py-2">
            React Playground
          </span>
        </Link>
        <hr className="opacity-25" />
        <Nav variant="pills" className="flex-column mb-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" end className="text-white mb-2">
              <FaHome className="me-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>

          {categories.map((category) => (
            <div key={category} className="mb-3">
              <div className="text-secondary px-3 py-1 small fw-bold text-uppercase opacity-50">
                {category}
              </div>
              {taskConfig
                .filter((task) => task.category === category)
                .map((task) => (
                  <Nav.Item key={task.id}>
                    <Nav.Link
                      as={NavLink}
                      to={task.path}
                      className="text-white-50 ms-2 py-1 small"
                      style={({ isActive }) => ({
                        color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
                        backgroundColor: isActive
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                      })}
                    >
                      {task.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
            </div>
          ))}
        </Nav>
        <hr className="opacity-25" />
        <div>
          <a
            href="https://github.com/kanaujiya/interview-coding-tasks"
            target="_blank"
            rel="noreferrer"
            className="text-white-50 text-decoration-none small hover-white"
          >
            <FaGithub className="me-2" /> GitHub Repository
          </a>
        </div>
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="d-lg-none bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="fw-bold">Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Nav className="flex-column">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={handleClose}
              className="px-4 py-3 text-white border-bottom border-light border-opacity-10"
            >
              <FaHome className="me-2" /> Dashboard
            </Nav.Link>

            {categories.map((category) => (
              <div key={category} className="mt-4 px-4">
                <div className="text-secondary small fw-bold text-uppercase opacity-50 mb-2">
                  {category}
                </div>
                {taskConfig
                  .filter((task) => task.category === category)
                  .map((task) => (
                    <Nav.Link
                      key={task.id}
                      as={NavLink}
                      to={task.path}
                      onClick={handleClose}
                      className="text-white-50 py-2 small ps-0"
                    >
                      {task.title}
                    </Nav.Link>
                  ))}
              </div>
            ))}
          </Nav>
          <div className="mt-5 p-4 border-top border-light border-opacity-10">
            <a
              href="https://github.com/kanaujiya/interview-coding-tasks"
              target="_blank"
              rel="noreferrer"
              className="text-white-50 text-decoration-none small"
            >
              <FaGithub className="me-2" /> GitHub Repository
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
