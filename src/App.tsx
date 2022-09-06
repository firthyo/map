import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import menu from "./images/menu.png";
import mapPin from "./images/map-pin.png";
import geo from "./images/geo.png";
import graph from "./images/graph.png";
import BranchLocator from "./pages/BranchLocator";
import GeoMarketing from "./pages/GeoMarketing";
import Heatmap from "./pages/Heatmap";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const DropdownList = [
    {
      message: "MENU",
      icon: menu,
      onclick: () => setIsDropdownOpen(!isDropdownOpen),
      to: "",
    },
    {
      message: "Branch Locator",
      icon: mapPin,
      onclick: () => {},
      to: "",
    },
    {
      message: "Geo-marketing",
      icon: geo,
      onclick: () => {},
      to: "geo-marketing",
    },
    {
      message: "Heatmap",
      icon: graph,
      onclick: () => {},
      to: "heatmap",
    },
  ];
  return (
    <SContainer>
      {isDropdownOpen && <SBackDrop onClick={() => setIsDropdownOpen(false)} />}
      <BrowserRouter>
        <SDropdown className={isDropdownOpen ? "open" : "close"}>
          {DropdownList.map((e, i) => {
            if (i === 0) {
              return (
                <SBar
                  className={isDropdownOpen ? "open" : "close"}
                  onClick={() => e.onclick()}
                  key={i}
                >
                  <SMessage>{e.message}</SMessage>
                  <SIcon src={e.icon} />
                </SBar>
              );
            } else {
              return (
                <Link to={e.to} style={{ textDecoration: "none" }} key={i}>
                  <SBar
                    className={isDropdownOpen ? "open" : "close"}
                    onClick={() => e.onclick()}
                  >
                    <SMessage>{e.message}</SMessage>
                    <SIcon src={e.icon} />
                  </SBar>
                </Link>
              );
            }
          })}
        </SDropdown>
        <Routes>
          <Route path="/" element={<BranchLocator />} />
          <Route path="/geo-marketing" element={<GeoMarketing />} />
          <Route path="/heatmap" element={<Heatmap />} />
        </Routes>
      </BrowserRouter>
    </SContainer>
  );
}

export default App;
const SBackDrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
const SMessage = styled.div`
  white-space: nowrap;
  width: 110px;
  color: black;
`;
const SIcon = styled.img`
  margin: 4px 4px 0px 20px;
  width: 32px;
  height: 32px;
`;
const SBar = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  &.open {
    &:hover {
      background-color: #d8d8d8;
    }
  }
`;
const ADropdownOpen = keyframes`
 0% { height: 40px; width: 40px; }
 30% { height: 150px; width: 40px; }
 100% { height: 150px; width: 177px;  }
`;
const ADropdownClose = keyframes`
 0% { height: 150px; width: 177px; }
 30% { height: 150px; width: 40px; }
 100% { height: 40px; width: 40px;  }
`;
const SDropdown = styled.div`
  position: absolute;
  z-index: 2;
  right: 10px;
  top: 10px;
  background-color: white;
  overflow: hidden;
  &.close {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation-name: ${ADropdownClose};
    animation-duration: 1s;
    width: 40px;
    height: 40px;
  }
  &.open {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation-name: ${ADropdownOpen};
    animation-duration: 1s;
    height: 150px;
    width: 177px;
  }
  cursor: pointer;
  border-radius: 5px;
`;
const SContainer = styled.div`
  width: 100%;
  height: 100%;
`;
