import { HiCalendar } from "react-icons/hi"; 
import { Box, Flex, Spacer, Tag, Text, Icon, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export function LaunchItem(launch){
    return(
        <Box 
        bg='gray.100' 
        p={4}
        m={4} 
        borderRadius='lg' >
        <Flex display='flex'>
          <Text fontSize='2xl'>
            Mission <strong>{launch.mission_name}</strong> {launch.launch_year}
          </Text>
          <Spacer />
         <Tag p={4} colorScheme={launch.launch_success ? 'green' : 'red'} >
            {launch.launch_success ? 'Success' : "Faillure"}
          </Tag>
        </Flex>
        <flex align='center' mt={8}>
             <Icon as={HiCalendar} color="gray.500"/>
               <text fontSize='sm' display="flex">
                {launch.launch_date_local.split('T')[0]}
              </text>
        </flex>
        
        <Box mt={2}>
        <Link to={`/launch/${launch.flight_number}`}>
          <Button mt={2} colorScheme='purple'>
            Más detalles
          </Button> 
        </Link>
        </Box>
      </Box>

    )
}