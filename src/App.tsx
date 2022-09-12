import styled from 'styled-components';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ReactComponent as GeoIcon } from './images/geo.svg';
import { ReactComponent as MapPinIcon } from './images/map-pin.svg';
import { ReactComponent as HomeIcon } from './images/home.svg';
import { ReactComponent as GraphIcon } from './images/graph.svg';
import BranchLocator from './pages/BranchLocator';
import GeoMarketing from './pages/GeoMarketing';
import Heatmap from './pages/Heatmap';
import Home from './pages/Home';
import RetailDelivery from './pages/RetailDelivery';

function App() {
  const location = useLocation();
  const DropdownList = [
    {
      message: 'Home',
      icon: <HomeIcon />,
      onclick: () => {},
      to: '/',
    },
    {
      message: 'Branch Locator',
      icon: <MapPinIcon />,
      onclick: () => {},
      to: '/branch-locator',
    },
    {
      message: 'Geo-marketing',
      icon: <GeoIcon />,
      onclick: () => {},
      to: '/geo-marketing',
    },
    {
      message: 'Heatmap',
      icon: <GraphIcon />,
      onclick: () => {},
      to: '/heatmap',
    },
    {
      message: 'RetailDelivery',
      icon: <GraphIcon />,
      onclick: () => {},
      to: '/retail-delivery',
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
        <Route path="/" element={<Home />} />
        <Route path="/branch-locator" element={<BranchLocator />} />
        <Route path="/geo-marketing" element={<GeoMarketing />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/retail-delivery" element={<RetailDelivery />} />
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
  & > svg {
    margin-right: 5px;
  }
  &.selected {
    background: #404040;
    color: white;
    & > svg {
      & > path {
        stroke: white;
      }
    }
  }
  &.firstSelected {
    background: #404040;
    color: white;
    & > svg {
      fill: white;
    }
  }
`;
