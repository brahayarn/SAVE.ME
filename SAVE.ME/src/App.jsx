import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from './pages/Auth/Auth';

const App = () => {
    return (
        <Router>
            <Auth />
        </Router>
    );
};

export default App;
