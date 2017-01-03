import { AngularCliSweetalert2DemoPage } from './app.po';

describe('angular-cli-sweetalert2-demo App', function() {
  let page: AngularCliSweetalert2DemoPage;

  beforeEach(() => {
    page = new AngularCliSweetalert2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
