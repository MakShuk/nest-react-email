import { Injectable } from '@nestjs/common';
import { Html, Text, render } from '@react-email/components';
import * as React from 'react';

@Injectable()
export class EmailTemplateService {
  send({ name }: { name: string }) {
    return (
      <Html lang="ru">
        <Text>{name}</Text>
      </Html>
    );
  }

  render() {
    return render(this.send({ name: 'Hello World' }));
  }
}
