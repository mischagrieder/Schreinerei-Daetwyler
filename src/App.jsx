import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LeistungenPage from './pages/LeistungenPage';
import LeistungDetailPage from './pages/LeistungDetailPage';
import ProjektePage from './pages/ProjektePage';
import UeberUnsPage from './pages/UeberUnsPage';
import JobsPage from './pages/JobsPage';
import KontaktPage from './pages/KontaktPage';
import { ImpressumPage, DatenschutzPage } from './pages/RechtPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/leistungen" element={<LeistungenPage />} />
                    <Route path="/leistungen/:slug" element={<LeistungDetailPage />} />
                    <Route path="/projekte" element={<ProjektePage />} />
                    <Route path="/ueber-uns" element={<UeberUnsPage />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/kontakt" element={<KontaktPage />} />
                    <Route path="/impressum" element={<ImpressumPage />} />
                    <Route path="/datenschutz" element={<DatenschutzPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
