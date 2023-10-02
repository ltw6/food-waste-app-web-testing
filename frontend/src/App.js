import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Query from './pages/query';
import Data from './pages/data';
import {useState} from "react";
import {useEffect} from "react";


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/query' element={<Query />} />
				<Route path='/data' element={<Data />} />
			</Routes>
		</Router>
	);
}

export default App;
