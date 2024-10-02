"use client"

import React, { useEffect, useState } from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import axios from 'axios';


interface Student {
  id: number;
  name: string;
  age: number;
}

const HomePage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students: ", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  
  return (
    <Container>
      <Navbar />
      <AddStudent onStudentAdded={fetchStudents}/>
      <StudentList students={students} fetchStudents={fetchStudents}/>
      <Footer/>
    </Container>
  );
};

export default HomePage;
