import React from "react";
import {useState,useEffect} from 'react';
import { Heading } from "@chakra-ui/react";
import { LaunchItem } from "./Launchitems";
import * as API from '../services/launches';


export function LaunchList(){
    const [launches,setLaunches] = useState([]);
    
    useEffect(() => {
      API.getAllLaunches().then(setLaunches).catch(console.log);
    },[])

return(
    <>
        <Heading align="center" as='h1' size="1g" m={4}>
          Misiones SpaceX
          </Heading>
          <p>por Pablo Riveiro</p>
          {launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  )
} 

