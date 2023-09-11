import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { FileRow } from "./components/FileRow";
import { FolderRow } from "./components/FolderRow";
import { useWorkspaceContext } from "../Workspace/Workspace.context";

export const FilePane = () => {
  const { files } = useWorkspaceContext();

  let filesNestedTree = [];
  let level = { result: filesNestedTree };

  files.forEach((file) => {
    file.path.split("/").reduce((r, name) => {
      if (!r[name]) {
        r[name] = { result: [] };
        r.result.push({
          name,
          children: r[name].result,
          file: file,
        });
      }

      return r[name];
    }, level);
  });

  const displayContent = (result) => {
    if (result.children.length > 0)
      return (
        <FolderRow name={result.name}>
          <Box>
            {result.children
              .sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
              )
              .map((child) => displayContent(child))}
          </Box>
        </FolderRow>
      );
    else return <FileRow key={result.file.path} file={result.file} />;
  };
  
  return (
    <Box>
      <Box p={1}>
        <Typography
          variant="h6"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          Files
        </Typography>
      </Box>
      <Box>{filesNestedTree.map((r) => displayContent(r))}</Box>
    </Box>
  );
};
