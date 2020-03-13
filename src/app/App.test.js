import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    it('renders the app component', () => {
        const appContainer = shallow(<App />);

        expect(appContainer).toBeDefined();
    });

    it('renders the pokedex header', () => {
        const appContainer = shallow(<App />);
        const appHeader = appContainer.childAt(0);
        const pokedexHeader = appHeader.childAt(0);

        expect(pokedexHeader.text()).toEqual('Pokedex');
    });
});
