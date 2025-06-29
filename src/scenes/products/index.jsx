import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetUserQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetUserQuery();
  console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
    },
    {
      field: "end_year",
      headerName: "End Year",
    },
    {
      field: "intensity",
      headerName: "Intensity",
    },
    {
      field: "sector",
      headerName: "Sector",
    },
    {
      field: "topic",
      headerName: "Topic",
    },
    {
      field: "insight",
      headerName: "Insight",
    },
    {
      field: "region",
      headerName: "Region",
    },
    {
      field: "start_year",
      headerName: "Start Year",
    },
    {
      field: "country",
      headerName: "Country",
    },
    {
      field: "relevance",
      headerName: "Relevance",
    },
    {
      field: "likelihood",
      headerName: "Likelihood",
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="INFORMATION" subtitle="Based on different projects" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
