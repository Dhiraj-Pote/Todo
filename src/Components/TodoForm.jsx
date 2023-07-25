import React, { useState } from "react";
import { FormControl, TextField, Button, Container } from "@mui/material";

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState("")

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(text)
    setText("")
  }

  return (
    
      <Container maxWidth="sm">
        <form onSubmit={handleOnSubmit}>
          <FormControl fullWidth={true} style={{ marginTop: 5 }}>
            <TextField value = {text} onChange={(e)=> {setText(e.target.value)}} label="I will do this" required={true} variant="filled" color="success" focused/>
            </FormControl>
            <Button variant="contained" type="submit" color="success" fullWidth={true} style={{ marginTop: 5 }}> Add </Button>
        </form>
      </Container>
    
  );
};

export default TodoForm;
