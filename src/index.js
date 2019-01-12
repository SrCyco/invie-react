import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import './css/invie.css';
import './css/animations.css';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';
import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';
import logoPlatzi from './images/platzi.png';

import cheet from 'cheet.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {
    isAnimated: false,
    menu: [
        {
            href: 'index.html',
            title: 'Home',
        },
        {
            href: '#guitarras',
            title: 'Guitarras',
        },
        {
            href: 'precios.html',
            title: 'Precios',
        }
    ],
    logoPortada: logoPortada,
    guitarras: [
        {
            image: acustica,
            alt: 'Guitarra Invie Acustica',
            name: 'Invie Acustica',
            features: [
                'Estilo vintage',
                'Madera pura',
                'Incluye estuche invisible de aluminio',
            ],
        },
        {
            image: clasica,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Classic',
            features: [
                'Estilo vintage',
                'Liviana',
                'Inicia tu camino como Rockstar',
            ],
        },

    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_PROPS': {
            const newProps = action.payload.props;
            return { ...state, ...newProps }
        }
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);

const easter = {
    isAnimated: 'is-animated',

    menu: [
        {

        },
    ],
    logoPortada: logoPlatzi,
    guitarras: [
        {
            image: easterA,
            alt: 'Guitarra Padre de Familia',
            name: 'Invie Familiar',
            features: [
                'Lista para copiar los Simpsons',
                'Aire puro',
                'Chistes malos',
            ],
        },
       
        {
            image: easterB,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Classic',
            features: [
                'Estilo vintage',
                'Liviana',
                'Inicia tu camino como Rockstar',
            ],
        },

    ]
}

cheet('i n v i e', () => {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: easter
        }
    });
});
cheet('g o b a c k', () => {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState
        }
    });
});

ReactDOM.render(
    <Provider store = {store}>
        <Invie />
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
