import { Box } from "@mui/material";
import React from "react";

export const myinfoCompo = (Imo: React.ElementType, up: string, down: string) => {
  return (
    <Box
      key={up}
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
        margin: "0 auto",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div style={{ paddingRight: "10px", color: "#fff" }}>
        <Imo />
      </div>
      <div style={{ lineHeight: "150%" }}>
        <div style={{ fontWeight: "700", color: "#fff" }}>{up}</div>
        <div style={{ fontWeight: "200", color: "#fff" }}>{down}</div>
      </div>
    </Box>
  );
};
