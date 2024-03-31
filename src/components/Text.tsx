import { Text as ReactText } from '@react-email/components';
import * as React from 'react';

export function Text({ text }: { text: string }) {
  return <ReactText style={{ color: 'green' }}>{text}</ReactText>;
}
