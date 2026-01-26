import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import { taskConfig } from "./config/taskConfig";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { Spinner } from "react-bootstrap";
import ScrollToTop from "./components/common/ScrollToTop";

// Loading Fallback
const LoadingFallback = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "50vh" }}
  >
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            {taskConfig.map((task) => (
              <Route key={task.id} path={task.path} element={task.component} />
            ))}
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <div className="text-center mt-5">
                  <h3>404 - Page Not Found</h3>
                  <p>The page you are looking for does not exist.</p>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
