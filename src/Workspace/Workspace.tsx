import React from "react";
import { Box } from "@mui/material";
import { FilePane } from "../FilePane/FilePane";
import { Editor } from "../Editor/Editor";
import { WorkspaceProvider } from "./Workspace.context";
import defaultFiles from "./defaultFiles";

export const Workspace = () => {
  return (
    <WorkspaceProvider files={defaultFiles}>
      <Box display="flex" height="100%">
        <FilePane />
        <Editor />
      </Box>
    </WorkspaceProvider>
  );
};
