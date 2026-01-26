import React, { useState, useEffect, useMemo } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { Spinner, Alert, Nav } from "react-bootstrap";

// Register languages
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", js);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("json", json);

const CodeViewer = ({ sourcePath, isVisible }) => {
  const [manifest, setManifest] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  // Get task identifier and entry file from sourcePath
  // e.g. /code/FileExplorerApp/FileExplorerApp.jsx -> taskKey: FileExplorerApp, entry: FileExplorerApp.jsx
  const { taskKey, entryFile } = useMemo(() => {
    if (!sourcePath) return { taskKey: "", entryFile: "" };
    const parts = sourcePath.split("/");
    const key = parts[2];
    const entry = parts[parts.length - 1];
    return { taskKey: key, entryFile: entry };
  }, [sourcePath]);

  // Fetch manifest on mount
  useEffect(() => {
    fetch("/code/manifest.json")
      .then((res) => res.json())
      .then((data) => setManifest(data))
      .catch(() => console.error("Could not load code manifest"));
  }, []);

  // Set initial selected file when task changes
  useEffect(() => {
    if (isVisible) {
      setSelectedFile(entryFile);
    }
  }, [isVisible, entryFile]);

  // Fetch code when selected file changes
  useEffect(() => {
    if (isVisible && taskKey && selectedFile) {
      setLoading(true);
      setError("");

      // Determine the fetch path
      // If taskKey is a file (.js/jsx in manifest), path is just /code/taskKey
      // If taskKey is a folder, path is /code/taskKey/selectedFile
      const isFolder =
        manifest && manifest[taskKey] && manifest[taskKey].length > 1;
      const fetchPath = isFolder
        ? `/code/${taskKey}/${selectedFile}`
        : `/code/${taskKey}`;

      fetch(fetchPath)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load source code");
          return res.text();
        })
        .then((text) => setCode(text))
        .catch((err) => setError("Could not load source code."))
        .finally(() => setLoading(false));
    }
  }, [isVisible, taskKey, selectedFile, manifest]);

  if (!isVisible) return null;

  const files = manifest && manifest[taskKey] ? manifest[taskKey] : [];
  const hasMultipleFiles = files.length > 1;

  const getLanguage = (filename) => {
    if (filename.endsWith(".css")) return "css";
    if (filename.endsWith(".json")) return "json";
    return "javascript";
  };

  return (
    <div className="mt-4 border-0 rounded-4 overflow-hidden shadow-lg bg-dark has-transitions">
      {/* Header / Tabs */}
      <div className="bg-dark border-bottom border-secondary border-opacity-25 px-3 pt-2">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <small className="text-secondary font-monospace">
            {taskKey} {hasMultipleFiles ? "" : `/ ${selectedFile}`}
          </small>
        </div>

        {hasMultipleFiles && (
          <Nav
            variant="tabs"
            activeKey={selectedFile}
            onSelect={(k) => setSelectedFile(k)}
            className="border-0"
          >
            {files.map((file) => (
              <Nav.Item key={file}>
                <Nav.Link
                  eventKey={file}
                  className={`py-2 px-3 small border-0 text-capitalize ${selectedFile === file ? "text-white bg-primary bg-opacity-10 border-bottom border-primary border-4" : "text-secondary"}`}
                  style={{ borderRadius: "8px 8px 0 0", cursor: "pointer" }}
                >
                  {file.split("/").pop()}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        )}
      </div>

      {/* Code Area */}
      <div
        style={{
          maxHeight: "600px",
          overflowY: "auto",
          backgroundColor: "#1e1e1e",
        }}
      >
        {loading ? (
          <div className="p-5 text-center text-white opacity-50">
            <Spinner animation="border" size="sm" className="me-2" />
            Fetching {selectedFile}...
          </div>
        ) : error ? (
          <div className="p-4">
            <Alert
              variant="danger"
              className="m-0 border-0 bg-danger bg-opacity-10 text-danger"
            >
              {error}
            </Alert>
          </div>
        ) : (
          <SyntaxHighlighter
            language={getLanguage(selectedFile)}
            style={vs2015}
            customStyle={{
              margin: 0,
              padding: "2rem",
              fontSize: "0.85rem",
              lineHeight: "1.6",
              backgroundColor: "transparent",
            }}
            showLineNumbers={true}
            wrapLines={true}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default CodeViewer;
