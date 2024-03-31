import { Button as ReactButton, Text } from '@react-email/components';
import * as React from 'react';

export function Button({ text, link }: { text: string; link: string }) {
  return (
    <ReactButton
      style={{ backgroundColor: 'blue', color: 'white', padding: '5px' }}
      href={link}
    >
      <Text>{text}</Text>
    </ReactButton>
  );
}
