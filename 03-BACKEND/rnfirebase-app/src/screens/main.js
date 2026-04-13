import { Text, View } from 'react-native'
import React, { Component } from 'react'
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { signOutUser } from "./firebase";


const Main = ({ user }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h5">
        Welcome, {user.displayName}
      </Typography>

      <Typography variant="body1" sx={{ mt: 1 }}>
        {user.email}
      </Typography>

      <Button
        variant="outlined"
        color="error"
        sx={{ mt: 3 }}
        onClick={signOutUser}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Main;