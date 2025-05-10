import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { IssuesProvider } from "./context/IssuesContext";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Search from "./components/Search/Search";
import Collection from "./components/Collection/Collection";
import Wantlist from "./components/Wantlist/Wantlist";
import IssueDetails from "./components/IssueDetails/IssueDetails";
import Navbar from "./components/Navbar/Navbar";
import { CollectionProvider } from "./context/CollectionContext";
import { WantlistProvider } from "./context/WantlistContext";

function App() {
  return (
    <div className="app">
      <IssuesProvider>
        <CollectionProvider>
          <WantlistProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<Search />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/wantlist" element={<Wantlist />} />
                <Route path="/issue_details/:id" element={<IssueDetails />} />
              </Routes>
            </BrowserRouter>
          </WantlistProvider>
        </CollectionProvider>
      </IssuesProvider>
    </div>
  );
}

export default App;
