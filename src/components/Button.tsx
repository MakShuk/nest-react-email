import { Button as ReactButton, Text } from '@react-email/components';
import * as React from 'react';

export function Button({ text }: { text: string }) {
  return (
    <ReactButton
      style={{ backgroundColor: 'blue', color: 'white', padding: '5px' }}
    >
      <Text>{text}</Text>
    </ReactButton>
  );
}
