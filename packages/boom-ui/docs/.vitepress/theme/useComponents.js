import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Status from '../../../src/components/status';
import BoomButton from '../../../src/components/button';
export function useComponents(app) {
  app.component('Status', Status);
  app.component('Button', BoomButton);
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
}
