import { Box } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import DeleteAccount from './pages/DeleteAccount'

function App() {
  return (
    <HashRouter>
      <Box>
        <Navbar />
        <Box pt="56px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
          </Routes>
        </Box>
      </Box>
    </HashRouter>
  )
}

export default App 