import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const location = useLocation();

  if (location.pathname === "/add") {
    return null;
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Recent Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.transactions.map((transaction, index) => (
              <TableRow
                key={transaction.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "transparent"
                }}
              >
                <TableCell>{transaction.description}</TableCell>
                <TableCell align="right">{transaction.amount} Rs.</TableCell>
                <TableCell align="right">{transaction.category}</TableCell>
                <TableCell align="right">{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        style={{ marginTop: "16px" }}
        variant="contained"
        color="primary"
        component={Link}
        to="/add"
      >
        Add to Transactions
      </Button>
    </div>
  );
};

export default TransactionList;
