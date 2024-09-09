'use client';

import OtherComponent from '../components/OtherComponent';
import { Heading } from '@chakra-ui/react';

export default function Home() {

  return (
    <div>
      <Heading>React Server - test</Heading>
      <OtherComponent />
    </div>
  );
}