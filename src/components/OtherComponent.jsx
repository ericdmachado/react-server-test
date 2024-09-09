import { lazy } from 'react'; 
import {Heading, Spinner} from '@chakra-ui/react';
import {Suspense} from 'react';

const AsyncServerComponent = lazy(()=>import('./AsyncServerComponent'));

export default function OtherComponent(){
  return (
    <div style={{border: '2px solid red'}}>
      <Heading size="ls">Load Async Server Component</Heading>
      <Suspense fallback={<Spinner color='blue.500' />}>
        <AsyncServerComponent />
      </Suspense>
    </div>
  );
}