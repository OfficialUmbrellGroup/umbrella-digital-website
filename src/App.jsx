import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AssetWealthManagementPage from "./pages/AssetWealthManagementPage";
import NewsIndexPage from "./pages/NewsIndexPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import ProductPlaceholderPage from "./pages/ProductPlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="products/asset-wealth-management"
            element={<AssetWealthManagementPage />}
          />
          <Route path="products/:slug" element={<ProductPlaceholderPage />} />
          <Route path="insights" element={<NewsIndexPage />} />
          <Route path="insights/:slug" element={<NewsArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
