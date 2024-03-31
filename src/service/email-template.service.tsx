import { Injectable } from '@nestjs/common';
import { Html, render } from '@react-email/components';
import { ReactElement, cloneElement } from 'react';
import * as React from 'react';

@Injectable()
export class EmailTemplateService {
  private components: ReactElement[] = [];

  render() {
    return render(<Html lang="ru">{this.components}</Html>);
  }

  addComponents(components: ReactElement[]) {
    this.components = [];
    components.forEach((component, index) => {
      const key = index.toString();
      const componentWithKey = cloneElement(component, { key });
      this.components.push(componentWithKey);
    });
  }
}
