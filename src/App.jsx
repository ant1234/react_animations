import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import FramerPage from './pages/FramerPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
  { path: '/framer', element: <FramerPage />}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
 