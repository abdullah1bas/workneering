import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../component/Header";
const columns = [
  {
    field: "id",
    headerName: "Name",
    align: "center",
    headerAlign: "center",
    flex: 1,
    //   width: 33,
  },
  {
    field: "country",
    headerName: "Country",
    align: "center",
    headerAlign: "center",
    flex: 1,
    //   width: 33,
  },
  {
    field: "amount",
    headerName: "Amount",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "bankName",
    headerName: "BankName",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "payment",
    headerName: "Payment MethodName",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "creditor",
    headerName: "Creditor Bank Account Number",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "send",
    headerName: "Send",
    align: "center",
    headerAlign: "center",
    flex: 1,
    width: 150,
    renderCell: ({ row: { send } }) => {
      return (
        <>
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            {send}
          </Button>
        </>
      );
    },
  },
];

const rows = [
  {
    id: "Ahmed Refaat",
    country: "Egypt",
    amount: 0,
    bankName: "Bank Masr",
    payment: "Cash",
    creditor: "71536165341712",
    send: "Send",
  },
];
const FreelanceRequest = () => {
  console.log('FreelanceRequest Page')
  return (
    <>
      <Header title={"Payment Details"} subTitle={"Show Details"} />
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

export default FreelanceRequest;
