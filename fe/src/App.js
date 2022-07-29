import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import Landing from './pages/landing';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Landing />} />
                {
                    new Array(10).fill(0)
                }
            </Routes>
        </>
    );
  }

export default App;