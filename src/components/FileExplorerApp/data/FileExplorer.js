export const FileExplorer = {
  id: 1,
  name: "root",
  isFolder: true,
  children: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      children: [
        {
          id: 3,
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: 4,
      name: "src",
      isFolder: true,
      children: [
        {
          id: 6,
          name: "App.js",
          isFolder: false,
        },
        {
          id: 7,
          name: "index.js",
          isFolder: false,
        },
        {
          id: 8,
          name: "style.css",
          isFolder: false,
        },
      ],
    },
    {
      id: 9,
      name: "package.json",
      isFolder: false,
    },
  ],
};
