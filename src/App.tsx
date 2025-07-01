import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FlowPage from './pages/FlowPage';

import '@xyflow/react/dist/style.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flow" element={<FlowPage />} />
            </Routes>
        </Router>
    );
}
