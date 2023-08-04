import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchTransactions } from "../src/Redux/actions/transactionActions";
import Dashboard from "./Components/Dashboard";
import TransactionList from "./Components/TransactionList";
import TransactionForm from "./Components/TransactionForm";
import Header from "./Components/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch transactions when the component mounts
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Header />
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Dashboard />
            </Grid>
            <Grid item xs={9}>
              <Routes>
                <Route path="/" element={<TransactionList />} />
                <Route path="/add" element={<TransactionForm />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
};
export default App;
