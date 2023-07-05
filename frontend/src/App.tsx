import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SearchScreen from "./SearchScreen/SearchScreen";
import QuestionInfoScreen from "./QuestionInfoScreen/QuestionInfoScreen";
import SearchResultsScreen from "./SearchResultsScreen/SearchResultsScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<SearchScreen />} />
        <Route path="/results" element={<SearchResultsScreen />} />
        <Route path="/question/:questionId" element={<QuestionInfoScreen />} />
      </Routes>
    </div>
  );
}

export default App;
