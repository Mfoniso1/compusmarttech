import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { EnterprisePage } from './pages/Enterprise';
import { AcademyPage } from './pages/Academy';
import { HealthPage } from './pages/Health';
import { TalentPage } from './pages/Talent';
import { GovernmentPage } from './pages/Government';
import { MediaPage } from './pages/Media';
import { ServicesPage, IncubatorPage, MarketplacePage, LabPage } from './pages/Placeholders';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="enterprise" element={<EnterprisePage />} />
          <Route path="academy" element={<AcademyPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="talent" element={<TalentPage />} />
          <Route path="government" element={<GovernmentPage />} />
          <Route path="media" element={<MediaPage />} />
          
          {/* Support pages */}
          <Route path="incubator" element={<IncubatorPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="lab" element={<LabPage />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
