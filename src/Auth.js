import { Button, Box, Input, Stack, Text, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'

const SignUp = () =>{
    const {signup} = useMoralis()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    return(
        <Stack spacing={3}>
            <Input type={username} placeholder="Username" value={username} onChange={(event)=> setUsername(event.currentTarget.value)} />
            <Input type={email} placeholder="Email" value={email} onChange={(event)=> setEmail(event.currentTarget.value)} />
            <Input type={password} placeholder="Password" value={password} onChange={(event)=> setPassword(event.currentTarget.value)} />
            <Button onClick={()=> signup(username, password, email)}>Sign Up</Button>
        </Stack>
    )
}
    
const Login = () =>{
    const {login} = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return(
        <Stack spacing={3}>
            <Input type={email} placeholder="Email" value={email} onChange={(event)=> setEmail(event.currentTarget.value)} required />
            <Input type={password} placeholder="Password" value={password} onChange={(event)=> setPassword(event.currentTarget.value)} required />
            <Button onClick={()=> login(email, password)}>Log In</Button>
        </Stack> 
    )
}

export const Auth = () =>{
    const { authenticate, isAuthenticating, authError} = useMoralis();

    
    return <Stack spacing={6}>
        {authError && (
            <Alert status="error">
                <AlertIcon />
                <Box flex="1">
                    <AlertTitle>Authentication has Failed!</AlertTitle>
                    <AlertDescription display="block">
                        {authError.message}
                    </AlertDescription>
                </Box>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
        )}
        <Button isLoading={isAuthenticating} onClick={()=> authenticate()}>Authenticate Via MetaMask</Button>
        <Text textAlign="center"><em>Or</em></Text>
        <SignUp />
        <Text textAlign="center"><em>Or</em></Text>
        <Login />
    </Stack>
}