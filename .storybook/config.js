import { configure, setAddon, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import centered from '@kadira/react-storybook-decorator-centered';
import {withKnobs} from '@kadira/storybook-addon-knobs';



setAddon(infoAddon);
addDecorator(withKnobs);
addDecorator(centered);

const req = require.context('../stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(path=>req(path));
}

configure(loadStories, module);
