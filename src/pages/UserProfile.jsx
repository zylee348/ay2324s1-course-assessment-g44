import React from 'react';
import Header from '../components/header'
import Navbar from '../components/navbar'
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger } from '@mantine/core';


function UserProfile() {
  const [opened, { toggle }] = useDisclosure();


    return (
        <AppShell
        header={{ height: 60 }}
        navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
        >
          <AppShell.Header>
            <Header />
          </AppShell.Header>
    
          <AppShell.Navbar p="lg">
            <Navbar/>
          </AppShell.Navbar>

          <AppShell.Main>UserProfile account stuff here</AppShell.Main>
        </AppShell>
      );
    }
  
  export default UserProfile;