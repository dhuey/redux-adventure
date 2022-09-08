import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureAppStore } from '../store/configureStore';

export const renderWithProviders = (ui, {initialState={}, store=configureAppStore, ...renderOptions } = {}) => {
    const Wrapper = ({children}) => {
        return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}
