import { FileExplorer } from "./data/FileExplorer.js";
import { useState } from "react";
import "./style.css";
import FolderStructure from "./components/FolderStructure";
import useActionNodeTree from "./hook/useActionNodeTree";

export default function App() {
  const [explorer, setExplorer] = useState(FileExplorer);
  const { insertNode, removeNode, editNode } = useActionNodeTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(finalTree);
  };

  const handleRemoveNode = (folderId) => {
    const finalTree = removeNode(explorer, folderId);
    setExplorer(finalTree);
  };

  const handleEditNode = (folderId, newName, isFolder) => {
    const finalTree = editNode(explorer, folderId, newName, isFolder);
    setExplorer(finalTree);
  };

  return (
    <div className="App">
      <FolderStructure
        handleInsertNode={handleInsertNode}
        handleRemoveNode={handleRemoveNode}
        handleEditNode={handleEditNode}
        explorer={explorer}
      />
    </div>
  );
}
