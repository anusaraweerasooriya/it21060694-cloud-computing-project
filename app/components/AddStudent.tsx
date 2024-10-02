"use client";

import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Container } from '@mui/material';
import axios from 'axios';

interface AddStudentProps {
  onStudentAdded: () => void;  // The refetch callback
}

const AddStudent: React.FC<AddStudentProps> = ({ onStudentAdded }) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const studentData = { name, age: Number(age) };

    try {
      await axios.post('/api/students', studentData);
      setName('');
      setAge('');
      handleClose(); // Close dialog after successful submission

      // Trigger refetch of the student list
      onStudentAdded();
    } catch (error) {
      console.error('Error adding student: ', error);
    }
  };

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{marginBottom: 3}}>
        Add Student
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Student</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              fullWidth
              margin="dense"
              type="number"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Add Student
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AddStudent;
