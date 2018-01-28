import { AppPage } from './app.po';


const TIMEOUT = 10000;
const APP_NAME = 'Movie Viewer';
const RESULTS_PER_PAGE = 20;

describe('ng2-movie-viewer App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('should test the page title and heading', () => {
    expect(page.getPageTitle()).toEqual(APP_NAME);
    expect(page.getElementText('app-root h1')).toEqual(APP_NAME);
  });

  it('should test a movie container', () => {
    expect(page.isElementPresent('.movie-container')).toBe(true);

    page.clickElement('.movies-list-container:nth-child(1) .movie-button');
    page.waitForAngular();

    expect(page.isElementPresent('.movie-container h4')).toBe(true);
    expect(page.isElementPresent('.movie-image')).toBe(true);
    expect(page.isElementPresent('.votes-gauge-container')).toBe(true);
    expect(page.elementCount('.movie-container')).toBe(RESULTS_PER_PAGE);
    expect(page.elementCount('.movie-info-container .movie-info')).toBe(2 * RESULTS_PER_PAGE);
    expect(page.elementCount('.movie-info-container .movie-info .movie-info-col')).toBe(3 * RESULTS_PER_PAGE);
    expect(page.elementCount('.votes-gauge-container .movie-rating-star')).toBe(5 * RESULTS_PER_PAGE);
  });

  it('should test a movie image', () => {
    page.clickElement('.movie-image-container');
    page.wait('.movie-image-container.big');
    page.clickElement('.movie-image-container');
    page.wait('.movie-image-container');
  });

  it('should test the "Load more" movies button', () => {
    page.clickElement('.load-more-movies');
    page.waitForAngular();
    page.wait('.load-more-movies-text');
  });

  it('should test the loaded movies', () => {
    expect(page.elementCount('.movie-container')).toBe(2 * RESULTS_PER_PAGE);
  });
});
