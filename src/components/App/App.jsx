import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage.jsx';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage.jsx';
// import CamperDetailPage from '../../pages/CamperDetailPage/CamperDetailPage.jsx';
// import NotFound from '../../pages/NotFound/NotFound.jsx';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* <Route path="/catalog/:id" element={<CamperDetailPage />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
