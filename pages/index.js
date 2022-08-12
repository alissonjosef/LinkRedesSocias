import { Flex, Box, Button, Avatar, WrapItem, HStack, Text, Link } from "@chakra-ui/react"


export default function Home() {

  const itemButton = [

    {
      link: 'https://www.linkedin.com/in/2315alisson-juan/',
      name: 'Linkedin'
    },

    {
      link: 'https://github.com/alissonjosef',
      name: 'Github'
    },

    {
      link: 'https://www.instagram.com/alissonjosef/',
      name: 'Instagram'
    },

    {
      link: 'mailto:alissonjosef@gmail.com',
      name: 'Email'
    },
  ]


  return (
    <Flex paddingTop={10} justifyContent='center'>
      <Flex bg='#e2e2e2' padding={20} justifyContent='center' borderRadius={5} paddingTop={5} margin={5}>
        <Box>
          <WrapItem display='flex' justifyContent='center'>
            <Avatar size='2xl' name='Alisson Silva' src='https://avatars.githubusercontent.com/u/46210532?v=4' />
          </WrapItem>
          <HStack paddingTop={5} display='flex' flexDirection='column' gap={5}>
            <Text fontWeight='bold' fontSize="2rem">Alisson Silva</Text>
            <Text>
              Desenvolvedor Frontend | ReactJs | Engenheiro de software 🚀</Text>
            {
              itemButton.map((item) => {
                return (
                  <>
                    <Button w='100%' as={Link} href={item.link} isExternal colorScheme='facebook' >
                      {item.name}
                    </Button>
                  </>
                )
              })
            }
          </HStack>
        </Box>
      </Flex>
    </Flex>
  )
}
