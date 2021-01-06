import {images} from './images';
import { ProductTypes } from '../../types/Producttypes';

export const initialState: ProductTypes[] = [
    {
        id: 1,
        name: "Long Sleeve",
        price: 420,
        image: images.shirt1,
        count: 1,
        added: false
    },
    {
        id: 2,
        name: "V-neck",
        price: 250,
        image: images.shirt2,
        count: 1,
        added: false
    },
    {
        id: 3,
        name: "Doch-neck",
        price: 320,
        image: images.shirt3,
        count: 1,
        added: true
    },
    {
        id: 4,
        name: "Rangle-sleeve",
        price: 440,
        image: images.shirt4,
        count: 1,
        added: false
    },
    {
        id: 5,
        name: "chalk-neck",
        price: 410,
        image: images.shirt5,
        count: 1,
        added: true
    },
    {
        id: 6,
        name: "Long ballet",
        price: 520,
        image: images.shirt6,
        count: 1,
        added: false
    },
    {
        id: 7,
        name: "short-neck",
        price: 310,
        image: images.shirt7,
        count: 1,
        added: false
    },
    {
        id: 8,
        name: "fairy-tro",
        price: 200,
        image: images.shirt8,
        count: 1,
        added: false
    },
    {
        id: 9,
        name: "paneele",
        price: 220,
        image: images.shirt1,
        count: 1,
        added: false
    },
];