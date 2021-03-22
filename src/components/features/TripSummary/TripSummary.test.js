import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => { // funkcja describe służy do zgrupowania kilku testów
  it('it should render correct link', () => { // Drugim argumentem, podobnie jak w describe, jest funkcja strzałkowa, zawierająca wyrażenia testowe.
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='image.jpg' tags={[]} />); // W stałej component zapisujemy wynik funkcji shallow, która renderuje dla nas ten komponent,
    // funkcja shallow renderuje tylko komponent, który jej przekazujemy, bez renderowania komponentów zawartych w nim
    // Gdybyśmy potrzebowali wyrenderować wszystkie komponenty zawarte w testowanym komponencie, możemy użyć funkcji mount zamiast shallow 
    const renderedLink = component.find('.link').prop('to');
    // wyrażenie, które znajduje element z klasą link i sprawdza jego props to. 
    expect(renderedLink).toEqual(expectedLink); // funkcja expect pozwala na sprawdzenie, czy otrzymany wynik (czyli wyrenderowany komponent) jest prawdziwy
  });

  it('it img should have correct src and alt', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='trip' tags={[]} />);
    const expectedImgSrc = 'image.jpg';
    const expectedImgAlt = 'trip';
    expect(component.find('img').prop('src')).toEqual(expectedImgSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImgAlt);
  });

  it('it should render correctly props name, cost and days', () => {
    const component = shallow(<TripSummary id='id' image='image.jpg' name='trip' cost='2$' days={2} tags={[]} />);
    const expectedPropName = 'trip';
    const expectedPropCost = 'from 2$';
    const expectedPropDays = '2 days';
    expect(component.find('.title').text()).toEqual(expectedPropName);
    expect(component.find('.details').childAt(0).text()).toEqual(expectedPropDays);
    expect(component.find('.details').childAt(1).text()).toEqual(expectedPropCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });

  it('should render tags in spans in correct order', () => {
    const component = shallow(<TripSummary image='image.jpg' tags={['pierwszy', 'drugi', 'trzeci']} />);
    expect(component.find('.tags').childAt(0).text()).toEqual('pierwszy');
    expect(component.find('.tags').childAt(1).text()).toEqual('drugi');
    expect(component.find('.tags').childAt(2).text()).toEqual('trzeci');
  });

  it('should not render div with class "tags" when array is not given', () => {
    const component = shallow(<TripSummary image='image.jpg' tags={[]} />);

    expect(component.find('.tags')).toMatchObject({});
  });
});