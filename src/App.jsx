import { Image } from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/logo-spacex.png'
import LaunchesList from './components/LaunchesList'
import LaunchDetail from './components/LaunchDetail'
import RocketDetails from './components/RocketDetails'

function App() {
  return (
    <>
    <Image m={4} src={logo} width={300}/>
    <Routes>
      <Route path='/' element={<LaunchesList />}/>
      <Route path='/launch/:launchId' element={<LaunchDetail />}/>
      <Route path='/rockets/:rocketId' element={<RocketDetails />}/>
    </Routes>
    </>
  )
}

export default App