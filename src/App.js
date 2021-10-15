import { Button } from '@chakra-ui/react'
import { Container, Heading} from '@chakra-ui/layout'
import { useMoralis } from 'react-moralis'
import { Auth } from './Auth'


function App (){
  const { isAuthenticated, logout } = useMoralis();

  if(isAuthenticated){
    return(
      <Container>
        <Heading>Welcome to the Twitter Clone</Heading>
        <Button onClick={()=> logout()}>Log Out</Button>
      </Container>
    )
  }
  return(
    <Container>
      <Heading>Welcome to the Twitter Clone</Heading>
      <Auth/>
    </Container>
  )
}

export default App;