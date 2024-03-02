/* eslint-disable no-unused-vars */
import { Box, Button, Stack, } from "@mui/material";
import Header from "../../component/Header";
import { Create, Delete, RemoveRedEye, } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import DiscipDialog from "./DiscipDialog";

const AllBlogs = () => {
  console.log('AllBlogs Page')
  // columns[1].field.value === rows[1].key
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "description",
      headerName: "Short description",
      align: "center",
      headerAlign: "center",
      width: 200,
      renderCell: ({ row: { description } }) => {
        return <DiscipDialog {...{ description }} />;
      },
    },
    {
      field: "MainPhoto",
      headerName: "Main Photo",
      align: "center",
      headerAlign: "center",
      width: 130,
      renderCell: ({ row: { MainPhoto } }) => {
        return (
          <div style={{ width: "100%" }}>
            <img src={MainPhoto} style={{ width: "100%" }} />
          </div>
        );
      },
    },
    {
      field: "DetailsPhoto",
      headerName: "Details Photo",
      align: "center",
      headerAlign: "center",
      width: 130,
      renderCell: ({ row: { DetailsPhoto } }) => {
        return (
          <div style={{ width: "100%" }}>
            <img src={DetailsPhoto} style={{ width: "100%" }} />
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      headerAlign: "center",
      flex: 1,
      width: 150,
      renderCell: ({ row: { description, id, MainPhoto, DetailsPhoto } }) => {
        return (
          <>
            <Stack spacing={2} direction={"row"}>
              <Button onClick={()=> console.log(id)} variant="outlined" sx={{ minWidth: "40px" }}>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                  }}
                ></Box>
              </Button>
              <Button onClick={()=> console.log(description)} variant="outlined" sx={{ minWidth: "40px" }}>
                <RemoveRedEye />
              </Button>
              <Button onClick={()=> console.log(MainPhoto)} variant="outlined" sx={{ minWidth: "40px" }}>
                <Create />
              </Button>
              <Button onClick={()=> console.log(DetailsPhoto)} variant="outlined" sx={{ minWidth: "40px" }}>
                <Delete />
              </Button>
            </Stack>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Header title={"All Blogs"} subTitle={"Show the Blogs"} />
      <Box
        sx={{ height: 600, minWidth: "800px", mx: "auto", overflowX: "auto" }}
      >
        <DataGrid
          sx={{ overflowX: "auto" }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default AllBlogs;
