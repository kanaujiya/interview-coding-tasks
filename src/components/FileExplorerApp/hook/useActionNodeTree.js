const useActionNodeTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.children.unshift({
        id: Date.now(),
        name: item,
        isFolder,
        children: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree?.children?.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, children: latestNode };
  };

  const removeNode = (tree, folderId) => {
    if (!tree.children) return tree;

    const filteredChildren = tree.children.filter(
      (child) => child.id !== folderId,
    );

    const updatedChildren = filteredChildren.map((child) =>
      removeNode(child, folderId),
    );

    return {
      ...tree,
      children: updatedChildren,
    };
  };

  const editNode = (tree, folderId, newName, isFolder) => {
    if (tree.id === folderId && tree.isFolder === isFolder) {
      tree.name = newName;
      return tree;
    }
    let latestNode = [];
    latestNode = tree?.children?.map((obj) => {
      return editNode(obj, folderId, newName, isFolder);
    });
    return { ...tree, children: latestNode };
  };

  return { insertNode, removeNode, editNode };
};

export default useActionNodeTree;
