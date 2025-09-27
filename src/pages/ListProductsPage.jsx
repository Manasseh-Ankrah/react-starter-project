import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ListProductsPage() {
  const [productList, setProductList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState("");

  // {{localhost}}/api/v1/products?tag=Featured
  const url = `http://localhost:8080/api/v1/products?tag=${tag}`;

  useEffect(() => {
    const handleGetProducts = async (e) => {
      try {
        const res = await axios
          .get(`${url}`, {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTc1ODk4NjU3MiwiZXhwIjoxNzU5MDcyOTcyfQ.szqBxTfyCRgAm1A1RBcqNOug0OCubD-8ajHVevwJVOI",
          })
          .then(function (response) {
            // console.log("Successful =>> ", response.data.content);
            setProductList(response.data.content);
          })
          .catch(function (error) {
            console.log(error.response.data.messages[0]);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const handleGetTags = async (e) => {
      try {
        const res = await axios
          .get("http://localhost:8080/api/v1/tags", {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTc1ODk4NjU3MiwiZXhwIjoxNzU5MDcyOTcyfQ.szqBxTfyCRgAm1A1RBcqNOug0OCubD-8ajHVevwJVOI",
          })
          .then(function (response) {
            console.log("Successful =>> ", response.data);
            setTagList(response.data.content);
          })
          .catch(function (error) {
            console.log(error.response.data.messages[0]);
          });
      } catch (error) {
        console.log(error);
      }
    };
    handleGetProducts();
    handleGetTags();
  }, [tag]);

  // console.log("====================================");
  // console.log("Saved tag => ", tag);
  // console.log("====================================");

  return (
    <div style={{ width: "100%", margin: "50px auto" }}>
      {/* <TextField
        id='outlined-select-currency'
        select
        label='Select Tag'
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        helperText='Please select product tag to filter'
      >
        {tagList?.map((option) => (
          <MenuItem key={option?.id} value={option?.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField> */}

      {/* <div style={{ height: "20px" }}></div> */}

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align='left'>Tag</StyledTableCell>
              <StyledTableCell align='left'>Category</StyledTableCell>
              <StyledTableCell align='left'>Quantity</StyledTableCell>
              <StyledTableCell align='left'>Cost</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList?.map((row) => (
              <StyledTableRow key={row?.name}>
                <StyledTableCell component='th' scope='row'>
                  {row?.name}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row?.tag?.name}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row?.category?.name}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row?.quantityInStock}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row?.sellingPrice}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
