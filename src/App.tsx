import styled from 'styled-components';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ReactComponent as Geo } from './images/geo.svg';
import { ReactComponent as MapPin } from './images/map-pin.svg';
import { ReactComponent as Home } from './images/home.svg';
import { ReactComponent as Graph } from './images/graph.svg';
import BranchLocator from './pages/BranchLocator';
import GeoMarketing from './pages/GeoMarketing';
import Heatmap from './pages/Heatmap';

function App() {
  const location = useLocation();
  const DropdownList = [
    {
      message: 'Home',
      icon: <Home />,
      onclick: () => {},
      to: '/',
    },
    {
      message: 'Branch Locator',
      icon: <MapPin />,
      onclick: () => {},
      to: '/branch-locator',
    },
    {
      message: 'Geo-marketing',
      icon: <Geo />,
      onclick: () => {},
      to: '/geo-marketing',
    },
    {
      message: 'Heatmap',
      icon: <Graph />,
      onclick: () => {},
      to: '/heatmap',
    },
  ];
  return (
    <SContainer>
      <SMenu>
        {DropdownList.map((e, i) => {
          return (
            <Link
              to={e.to}
              style={{ textDecoration: 'none', width: '100%' }}
              key={i}
            >
              <SChoice
                className={`${
                  location.pathname === e.to ? 'selected' : ''
                } ${
                  i === 0 && location.pathname === e.to
                    ? 'firstSelected'
                    : ''
                }`}
              >
                {e.icon}
                {e?.message}
              </SChoice>
            </Link>
          );
        })}
      </SMenu>
      <Routes>
        <Route path="/branch-locator" element={<BranchLocator />} />
        <Route path="/geo-marketing" element={<GeoMarketing />} />
        <Route path="/heatmap" element={<Heatmap />} />
      </Routes>
    </SContainer>
  );
}

export default App;
const SMenu = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  //----------------------
  width: 50%;
  height: 60px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
`;
const SContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const SChoice = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  color: black;
  &.selected {
    background: #404040;
    color: white;
    & > svg {
      margin-right: 5px;
      & > path {
        stroke: white;
      }
    }
  }
  &.firstSelected {
    background: #404040;
    color: white;
    & > svg {
      margin-right: 5px;
      fill: white;
    }
  }
`;
