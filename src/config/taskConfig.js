import React from "react";

// Lazy load all components
const ClickPanelShowHide = React.lazy(
  () => import("../components/ClickPanelShowHide"),
);
const CounterApp = React.lazy(() => import("../components/CounterApp"));
const SyncTwoInput = React.lazy(() => import("../components/SyncTwoInput"));
const ClickChangeColor = React.lazy(
  () => import("../components/ClickChangeColor"),
);
const SelectTagOption = React.lazy(
  () => import("../components/SelectTagOption"),
);
const CallApiListTable = React.lazy(
  () => import("../components/CallApiListTable"),
);
const ClickChangeBodyColor = React.lazy(
  () => import("../components/ClickChangeBodyColor"),
);
const SelectOptChangeBodyColor = React.lazy(
  () => import("../components/SelectOptChangeBodyColor"),
);
const SelectOptChangeColor = React.lazy(
  () => import("../components/SelectOptChangeColor"),
);
const ClickDeleteItem = React.lazy(
  () => import("../components/ClickDeleteItem"),
);
const GetRadioButtonData = React.lazy(
  () => import("../components/GetRadioButtonData"),
);
const CalculatorApp = React.lazy(() => import("../components/CalculatorApp"));
const StopWatchApp = React.lazy(() => import("../components/StopWatchApp"));
const ReduxToolkitApp = React.lazy(
  () => import("../components/ReduxToolkit/ReduxToolkitApp"),
);
const CustomHook = React.lazy(
  () => import("../components/CustomHook/CustomHook"),
);
const DebouncingFunctionality = React.lazy(
  () => import("../components/DebouncingFunctionality"),
);
const ChipInput = React.lazy(
  () => import("../components/ChipsInput/ChipInput"),
);
const FileExplorer = React.lazy(
  () => import("../components/FileExplorerApp/FileExplorerApp.jsx"),
);
const ControlledFormHandling = React.lazy(
  () =>
    import("../components/ControlledFormHandling/ControlledFormHandling.jsx"),
);
const CounterWithUndo = React.lazy(
  () => import("../components/CounterWithUndo/CounterWithUndo.jsx"),
);
const ClientSidePaginationApp = React.lazy(
  () =>
    import("../components/ClientSidePagination/ClientSidePaginationApp.jsx"),
);
const ProgressPage = React.lazy(
  () => import("../components/ProgressBar/ProgressPage.jsx"),
);
const ShowRandomDetails = React.lazy(
  () => import("../components/ShowRandomDetails/ShowRandomDetails.jsx"),
);

export const taskConfig = [
  {
    id: "random-details",
    title: "Show Random Details",
    path: "/random-details",
    component: <ShowRandomDetails />,
    description: "Displays random user details.",
    category: "Data Fetching",
    sourcePath: "/code/ShowRandomDetails/ShowRandomDetails.jsx",
  },
  {
    id: "counter-app",
    title: "Counter App",
    path: "/counter-app",
    component: <CounterApp />,
    description: "Simple counter functionality.",
    category: "State Management",
    sourcePath: "/code/CounterApp.jsx",
  },
  {
    id: "panel-show-hide",
    title: "Panel Show/Hide",
    path: "/panel-show-hide",
    component: <ClickPanelShowHide />,
    description: "Toggle panel visibility.",
    category: "UI Manipulation",
    sourcePath: "/code/ClickPanelShowHide.jsx",
  },
  {
    id: "sync-inputs",
    title: "Sync Two Inputs",
    path: "/sync-inputs",
    component: <SyncTwoInput />,
    description: "Synchronize two input fields.",
    category: "Forms & Inputs",
    sourcePath: "/code/SyncTwoInput.jsx",
  },
  {
    id: "change-color",
    title: "Click Change Color",
    path: "/change-color",
    component: <ClickChangeColor />,
    description: "Change background color on click.",
    category: "UI Manipulation",
    sourcePath: "/code/ClickChangeColor.jsx",
  },
  {
    id: "select-tag",
    title: "Select Tag Option",
    path: "/select-tag",
    component: <SelectTagOption />,
    description: "Demonstrate select tag usage.",
    category: "Forms & Inputs",
    sourcePath: "/code/SelectTagOption.jsx",
  },
  {
    id: "api-list",
    title: "Call API List",
    path: "/api-list",
    component: <CallApiListTable />,
    description: "Fetch and display list from API.",
    category: "Data Fetching",
    sourcePath: "/code/CallApiListTable.jsx",
  },
  {
    id: "body-color",
    title: "Change Body Color",
    path: "/body-color",
    component: <ClickChangeBodyColor />,
    description: "Change body background color.",
    category: "UI Manipulation",
    sourcePath: "/code/ClickChangeBodyColor.jsx",
  },
  {
    id: "select-body-color",
    title: "Select Opt Body Color",
    path: "/select-body-color",
    component: <SelectOptChangeBodyColor />,
    description: "Select option to change body color.",
    category: "UI Manipulation",
    sourcePath: "/code/SelectOptChangeBodyColor.jsx",
  },
  {
    id: "select-opt-color",
    title: "Select Opt Color",
    path: "/select-opt-color",
    component: <SelectOptChangeColor />,
    description: "Select option to change element color.",
    category: "UI Manipulation",
    sourcePath: "/code/SelectOptChangeColor.jsx",
  },
  {
    id: "delete-item",
    title: "Click Delete Item",
    path: "/delete-item",
    component: <ClickDeleteItem />,
    description: "Delete item from list.",
    category: "List Operations",
    sourcePath: "/code/ClickDeleteItem.jsx",
  },
  {
    id: "radio-data",
    title: "Get Radio Data",
    path: "/radio-data",
    component: <GetRadioButtonData />,
    description: "Get value from radio buttons.",
    category: "Forms & Inputs",
    sourcePath: "/code/GetRadioButtonData.jsx",
  },
  {
    id: "calculator",
    title: "Calculator App",
    path: "/calculator",
    component: <CalculatorApp />,
    description: "Basic calculator functions.",
    category: "Utilities",
    sourcePath: "/code/CalculatorApp.jsx",
  },
  {
    id: "stopwatch",
    title: "Stopwatch App",
    path: "/stopwatch",
    component: <StopWatchApp />,
    description: "Stopwatch with start/stop/reset.",
    category: "Utilities",
    sourcePath: "/code/StopWatchApp.jsx",
  },
  {
    id: "redux-toolkit",
    title: "Redux Toolkit App",
    path: "/redux-toolkit",
    component: <ReduxToolkitApp />,
    description: "State management with Redux Toolkit.",
    category: "State Management",
    sourcePath: "/code/ReduxToolkit/ReduxToolkitApp/index.jsx",
  },
  {
    id: "custom-hook",
    title: "Custom Hook",
    path: "/custom-hook",
    component: <CustomHook />,
    description: "Demonstrate custom React hook.",
    category: "Hooks",
    sourcePath: "/code/CustomHook/CustomHook/index.jsx",
  },
  {
    id: "debouncing",
    title: "Debouncing",
    path: "/debouncing",
    component: <DebouncingFunctionality />,
    description: "Debouncing input functionality.",
    category: "Performance",
    sourcePath: "/code/DebouncingFunctionality.jsx",
  },
  {
    id: "chip-input",
    title: "Chip Input",
    path: "/chip-input",
    component: <ChipInput />,
    description: "Input field with chips.",
    category: "UI Components",
    sourcePath: "/code/ChipsInput/ChipInput/index.jsx",
  },
  {
    id: "file-explorer",
    title: "File Explorer",
    path: "/file-explorer",
    component: <FileExplorer />,
    description: "Simulated file explorer UI.",
    category: "Complex UI",
    sourcePath: "/code/FileExplorerApp/FileExplorerApp.jsx",
  },
  {
    id: "controlled-form",
    title: "Controlled Form",
    path: "/controlled-form",
    component: <ControlledFormHandling />,
    description: "Handle form processing.",
    category: "Forms & Inputs",
    sourcePath: "/code/ControlledFormHandling/ControlledFormHandling.jsx",
  },
  {
    id: "counter-undo",
    title: "Counter With Undo",
    path: "/counter-undo",
    component: <CounterWithUndo />,
    description: "Counter with undo history.",
    category: "State Management",
    sourcePath: "/code/CounterWithUndo/CounterWithUndo.jsx",
  },
  {
    id: "client-pagination",
    title: "Client Pagination",
    path: "/client-pagination",
    component: <ClientSidePaginationApp />,
    description: "Pagination on client side.",
    category: "Data Fetching",
    sourcePath: "/code/ClientSidePagination/ClientSidePaginationApp.jsx",
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    path: "/progress-bar",
    component: <ProgressPage />,
    description: "Dynamic progress bar.",
    category: "UI Components",
    sourcePath: "/code/ProgressBar/ProgressPage.jsx",
  },
];
