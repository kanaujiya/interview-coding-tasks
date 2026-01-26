import React, { useState } from "react";
import { FiFolderPlus, FiFilePlus } from "react-icons/fi";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const FolderStructure = ({ handleInsertNode, handleRemoveNode, handleEditNode, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [editShowValue, setEditShowValue] = useState(null);
  const [showInputForm, setShowInputForm] = useState({
    visible: false,
    isFolder: null,
  });
  const [editNode, setEditNode] = useState({
    visible: false,
    id: null,
    isFolder: null,
  });

  const handleShowInput = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInputForm({ visible: true, isFolder });
  };

  const handleAddFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInputForm.isFolder);
      setShowInputForm({ ...showInputForm, visible: false });
    }
  };

  const handleNodeRemove = (e) => {
    e.stopPropagation();
    handleRemoveNode(explorer.id);
  };

  const handleEditNodeEdit = (e, name, isFolder) => {
    e.stopPropagation();
    setEditNode({ visible: true, id: explorer.id, isFolder });
    setEditShowValue(name);
  };

  const handleEditFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleEditNode(explorer.id, e.target.value, editNode.isFolder);
      setEditNode({ ...editNode, visible: false });
    }
  };

  if (explorer?.isFolder) {
    return (
      <>
        {editNode.visible && editNode.id === explorer.id ? (
          <div className="input-container">
            <span>📁</span>
            <input
              type="text"
              placeholder="Enter File/Folder Name"
              autoFocus={editNode.visible}
              defaultValue={editShowValue}
              onBlur={() => setEditNode({ ...editNode, visible: false })}
              onKeyDown={handleEditFolder}
            />
          </div>
        ) : (
          <div className="folder" onClick={() => setExpand(!expand)}>
            <span>📁{explorer?.name}</span>
            <span className="action-wrapper">
              <FiFolderPlus
                size={20}
                onClick={(e) => handleShowInput(e, true)}
              />
              <FiFilePlus
                size={20}
                onClick={(e) => handleShowInput(e, false)}
              />
              <MdOutlineEdit
                size={20}
                onClick={(e) =>
                  handleEditNodeEdit(e, explorer?.name, explorer?.isFolder)
                }
              />
              <MdDeleteOutline size={20} onClick={(e) => handleNodeRemove(e)} />
            </span>
          </div>
        )}

        <div
          className="containers"
          style={{ display: expand ? "block" : "none" }}
        >
          {showInputForm.visible && (
            <div className="input-container">
              <span>{showInputForm.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                placeholder="Enter File/Folder Name"
                autoFocus={showInputForm.visible}
                onBlur={() =>
                  setShowInputForm({ ...showInputForm, visible: false })
                }
                onKeyDown={handleAddFolder}
              />
            </div>
          )}

          {explorer?.children?.map((item) => {
            return (
              <FolderStructure
                handleInsertNode={handleInsertNode}
                handleRemoveNode={handleRemoveNode}
                handleEditNode={handleEditNode}
                explorer={item}
                key={item.id}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        {editNode.visible && editNode.id === explorer.id ? (
          <>
            <div className="input-container">
              <span>📄</span>
              <input
                type="text"
                placeholder="Enter File/Folder Name"
                autoFocus={editNode.visible}
                defaultValue={editShowValue}
                onBlur={() => setEditNode({ ...editNode, visible: false })}
                onKeyDown={handleEditFolder}
              />
            </div>
          </>
        ) : (
          <>
            <div className="file">
              <span>📄{explorer?.name}</span>
              <span className="action-wrapper">
                <MdOutlineEdit
                  size={20}
                  onClick={(e) =>
                    handleEditNodeEdit(e, explorer?.name, explorer?.isFolder)
                  }
                />
                <MdDeleteOutline
                  size={20}
                  onClick={(e) => handleNodeRemove(e)}
                />
              </span>
            </div>
          </>
        )}
      </>
    );
  }
};

export default FolderStructure;
