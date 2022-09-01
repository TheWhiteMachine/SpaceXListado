//import './App.css';
import {Routes,Route} from 'react-router-dom';
import logo from './assets/logo-space-x.png';
import { Heading } from '@chakra-ui/react';
import  {LaunchList}  from './Components/Launchlist';
import {LaunchDetails} from './Components/LaunchDetails' ;

export   function App() {
return (
    <div>


      <img src={logo} alt="logospeacex" className="" width={400} />

      <Heading as="h1" size='lg'>Despegues</Heading>

      <Routes>
        <Route path='/' element={<LaunchList />}/>
        <Route path='launch/:LaunchId' element={<LaunchDetails/>}/>
      </Routes>

      
    </div>
  )
}


