import { Box } from '@chakra-ui/react'
import React from 'react'
import Homeeight from '../Components/Home/Homeeight'
import Homefive from '../Components/Home/Homefive'
import Homefour from '../Components/Home/Homefour'
import Homeone from '../Components/Home/Homeone'
import Homeseven from '../Components/Home/Homeseven'
import Homesix from '../Components/Home/Homesix'
import Homethree from '../Components/Home/Homethree'
import Hometwo from '../Components/Home/Hometwo'

const Home = () => {
  return (
    <Box>
      <Homeone />
      <Hometwo />
      <Homethree />
      <Homefour />
      <Homefive />
      <Homesix />
      <Homeseven />
      <Homeeight />
    </Box>
  )
}

export default Home
