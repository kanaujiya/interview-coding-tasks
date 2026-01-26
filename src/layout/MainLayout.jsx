import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CodeViewer from "../components/common/CodeViewer";
import { taskConfig } from "../config/taskConfig";
import { FaCode, FaEyeSlash, FaBars } from "react-icons/fa";

const MainLayout = () => {
  const [showCode, setShowCode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  // Find current task to get source code
  const currentTask = taskConfig.find((t) => t.path === location.pathname);

  // Reset showCode when route changes
  useEffect(() => {
    setShowCode(false);
    setShowSidebar(false); // Also close sidebar on route change
  }, [location.pathname]);

  return (
    <div className="d-flex has-transitions min-vh-100">
      {/* Sidebar Navigation */}
      <Sidebar show={showSidebar} handleClose={handleSidebarClose} />

      {/* Main Content Area */}
      <div
        className="d-flex flex-column flex-grow-1 w-100 overflow-hidden"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Container fluid className="p-3 p-md-4 flex-grow-1">
          {/* Unified Header */}
          <div className="d-flex align-items-center justify-content-between mb-4 bg-white px-3 py-2 rounded-3 shadow-sm">
            <div
              className="d-flex align-items-center flex-grow-1 overflow-hidden"
              style={{ minHeight: "40px" }}
            >
              <Button
                variant="light"
                className="d-lg-none me-2 border-0 bg-transparent p-0 d-flex align-items-center"
                onClick={handleSidebarShow}
              >
                <FaBars className="text-dark" size={20} />
              </Button>
              <div className="text-truncate pt-2">
                <Breadcrumbs />
              </div>
            </div>

            {currentTask && currentTask.sourcePath && (
              <Button
                variant={showCode ? "light" : "primary"}
                className={`ms-3 d-flex align-items-center shadow-sm border-0 ${showCode ? "text-primary bg-primary bg-opacity-10" : ""}`}
                onClick={() => setShowCode(!showCode)}
                size="sm"
                style={{ whiteSpace: "nowrap", height: "36px" }}
              >
                {showCode ? (
                  <>
                    <FaEyeSlash className="me-md-2" />
                    <span className="d-none d-md-inline">Hide Code</span>
                  </>
                ) : (
                  <>
                    <FaCode className="me-md-2" />
                    <span className="d-none d-md-inline">View Code</span>
                  </>
                )}
              </Button>
            )}
          </div>

          <div
            className="bg-white p-3 p-md-4 rounded-4 shadow-sm border-0"
            style={{ minHeight: "60vh" }}
          >
            <Outlet />
          </div>

          <CodeViewer
            sourcePath={currentTask?.sourcePath}
            isVisible={showCode}
          />
        </Container>

        <footer className="bg-light py-3 text-center text-muted border-top mt-auto">
          <Container>
            <small>
              &copy; {new Date().getFullYear()} React Playground. All rights
              reserved.
            </small>
          </Container>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
