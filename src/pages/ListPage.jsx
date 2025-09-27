import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

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

const rows = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
];

export default function ListPage() {
  const [search, setSearch] = useState("");

  // Searchi Logic
  const filteredData = rows.filter((item) => {
    let name = item.name.toLocaleLowerCase();
    let userInput = search.toLocaleLowerCase();
    let result = name.includes(userInput);
    return result;
  });

  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <TextField
        id='outlined-basic'
        label='Search Desserts'
        variant='outlined'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ height: "20px" }}></div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align='right'>Calories</StyledTableCell>
              <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row.fat}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row.carbs}
                </StyledTableCell>
                <StyledTableCell component='th' scope='row'>
                  {row.protein}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
