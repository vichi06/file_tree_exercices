import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import { FileIcon } from "./FileIcon";
import { useWorkspaceContext } from "../../Workspace/Workspace.context";
import { AiFillCaretDown } from "react-icons/ai";

interface IFolderRowProps {}

export const FolderRow = ({ name, children }: any) => {
  const [opened, setOpened] = useState(false);

  return (
    <Box p={1}>
      <Typography>
        <a onClick={() => setOpened(!opened)} style={{ cursor: "pointer" }}>
          {name}{" "}
          <AiFillCaretDown
            size={10}
            style={{
              transform: `rotate(${opened ? "180" : "0"}deg)`,
            }}
          />
        </a>
      </Typography>
      {opened && children}
    </Box>
  );
};
