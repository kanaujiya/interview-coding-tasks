import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { taskConfig } from "../../config/taskConfig";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const currentTask = taskConfig.find((t) => t.path === location.pathname);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Breadcrumb className="p-2">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Dashboard
      </Breadcrumb.Item>
      {currentTask ? (
        <>
          <Breadcrumb.Item active>{currentTask.category}</Breadcrumb.Item>
          <Breadcrumb.Item active>{currentTask.title}</Breadcrumb.Item>
        </>
      ) : (
        pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Breadcrumb.Item active key={name} className="text-capitalize">
              {name}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: routeTo }}
              key={name}
              className="text-capitalize"
            >
              {name}
            </Breadcrumb.Item>
          );
        })
      )}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
