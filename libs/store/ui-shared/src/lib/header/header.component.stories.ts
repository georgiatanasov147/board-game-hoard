//IMPORT TOOLBAR MODULE
import { MatToolbarModule } from '@angular/material/toolbar';
import {Meta, moduleMetadata} from "@storybook/angular";
import {HeaderComponent} from "./header.component";

//......
export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule] // <-- import the module
    }),
    //...
  ],
} as Meta<HeaderComponent>;

export const Primary = {
  render: (args: HeaderComponent) => ({
    props: args,
  }),
  args: {
    title: 'test',
  },
};
