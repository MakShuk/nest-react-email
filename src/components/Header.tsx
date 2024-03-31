import { Font, Head } from '@react-email/components';
import * as React from 'react';

export function Header() {
  return (
    <Head>
      <Font
        fontFamily="'Roboto', 'Verdana', sans-serif"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
          format: 'woff2',
        }}
        fontWeight="400"
        fontStyle="normal"
      />
    </Head>
  );
}
// Path: src/components/Text.tsx
