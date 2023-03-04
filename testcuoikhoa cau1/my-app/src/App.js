import React from 'react';
import './App.css';
import Active from './components/tab/Active';
import All from './components/tab/All';
import Complete from './components/tab/Completed';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom';
import TodoListProvider from './components/TodoList';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='todo-app'>
      <TodoListProvider>
        <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/Active' element={<Active />} />
            <Route path='/complete' element={<Complete />} />
          </Routes>
        </Container>
      </TodoListProvider>
    </div>
  );
}

export default App;