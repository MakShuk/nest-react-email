import { Injectable } from '@nestjs/common';
import { Html, render } from '@react-email/components';
import React, { ReactElement } from 'react';

@Injectable()
export class EmailTemplateService {
  components: ReactElement[];

  render() {
    return render(<Html lang="ru">{this.components}</Html>);
  }
}
