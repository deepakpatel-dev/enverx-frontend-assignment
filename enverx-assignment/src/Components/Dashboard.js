import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchTransactions } from "../Redux/actions/transactionActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch transactions when the component mounts
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleGoToTransactionList = () => {
    // Navigate to the transaction list page
    navigate("/");
  };

  return (
    <Box>
      {/* Use onClick to handle the click event */}
      <Typography variant="h5" onClick={handleGoToTransactionList}>
        Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;
