import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { addTransaction } from "../Redux/actions/transactionActions";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const handleAddTransaction = () => {
    dispatch(
      addTransaction({ description, amount, category, date: transactionDate })
    );
    setDescription("");
    setAmount("");
    setCategory("");
    setTransactionDate("");
  };

  return (
    <Box p={2}>
      <div style={{ marginBottom: "16px" }}>
        <Button
          variant="contained"
          component={Link}
          to={location.pathname === "/add" ? "/" : "/add"}
        >
          {location.pathname === "/add"
            ? "Back to Transactions"
            : "Add to Transactions"}
        </Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <h5>Add a new Transaction</h5>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: "16px" }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginBottom: "16px" }}
        />
        <FormControl
          fullWidth
          variant="outlined"
          required
          style={{ marginBottom: "16px" }}
        >
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="Expense">Expense</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Date"
          type="date"
          defaultValue={transactionDate}
          onChange={(e) => setTransactionDate(e.target.value)}
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
          style={{ marginBottom: "16px" }}
        />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" onClick={handleAddTransaction}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TransactionForm;
