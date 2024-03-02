import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import Header from "../../component/Header";
import { GridView } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const currencies = [
  {
    value: "plan and strategy",
    label: "Planning and Strategy",
  },
  {
    value: "economics",
    label: "Economics",
  },
  {
    value: "engineering",
    label: "Engineering",
  },
  {
    value: "plan",
    label: "Planning",
  },
  {
    value: "project management",
    label: "Project and Construction Management",
  },
];

const AddBlogs = () => {
  console.log('AddBlogs Page')
  const navigate = useNavigate();
  return (
    <Stack sx={{ height: "100%" }}>
      <Header title={"Blogs"} subTitle={"Add Blog"} />
      <Stack direction={"row"} spacing={2} alignItems={"center"} sx={{}}>
        <Button onClick={() => navigate("/blogs/AllBlogs")}>
          <Stack direction={"row"} spacing={1}>
            <GridView /> <span style={{ color: "#00000061" }}>Blogs</span>
          </Stack>
        </Button>
        <Typography>Add Blog</Typography>
      </Stack>

      <Stack direction={"column"} p={10}>
        <Stack
          component={"form"}
          spacing={3}
          direction={"column"}
          sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Categories"
            defaultValue="plan and strategy"
            helperText="Please select your Categories"
            sx={{ width: "500px" }}
          >
            {currencies.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Enter Title"
            id="fullWidth"
            sx={{ width: "500px" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="short Description"
            multiline
            rows={5}
            sx={{ width: "500px" }}
            placeholder="blog short description"
          />
          <Button
            type="submit"
            variant="outlined"
            size="large"
            sx={{ textTransform: "capitalize", width: "150px" }}
            onClick={(e)=> {
                e.preventDefault();
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AddBlogs;
