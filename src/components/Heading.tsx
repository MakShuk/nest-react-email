import { Heading as ReactHeading } from '@react-email/components';
import * as React from 'react';

export function Heading({ text }: { text: string }) {
  return <ReactHeading as="h2">{text}</ReactHeading>;
}
