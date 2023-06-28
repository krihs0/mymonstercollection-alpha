import bigbazarmiddenwaard from '../assets/shops/bigbazarmiddenwaard.jpg';
import sparcityalkmaar from '../assets/shops/sparcityalkmaar.jpg';
import sparkortevondelstraat from '../assets/shops/sparkortevondelstraat.jpg';
import tropicaldrimo from '../assets/shops/tropicaldrimo.png';
import thecandycorner from '../assets/shops/thecandycorner.jpg';
import polskisklep from '../assets/shops/polskisklep.jpg';

const shopsData = [
    {
        id: 1,
        shop: "SPAR city Alkmaar",
        image: sparcityalkmaar,
        franchise: "spar",
        adres: "Dijk 14, 1811 MC Alkmaar",
        lastconfirmed: "",
        has: [
            {
                id: 1,
                price: 2.49,
            },
            {
                id: 9,
                price: 2.49,
            },
            {
                id: 19,
                price: 2.49,
            },
        ]
    },
    {
        id: 2,
        shop: "Spar Korte Vondelstraat",
        image: sparkortevondelstraat,
        franchise: "spar",
        adres: "Korte Vondelstraat 2, 1811 AE Alkmaar",
        lastconfirmed: "5/2/2023",
        has: [
            {
                id: 1,
                price: 2.29,
            },
            {
                id: 4,
                price: 2.29,
            },
            {
                id: 6,
                price: 1.38,
            },
            {
                id: 20,
                price: 2.29,
            },
            {
                id: 24,
                price: 1.50,
            },
            {
                id: 27,
                price: 2.29,
            },
            {
                id: 30,
                price: 2.99,
            },
        ]
    },
    {
        id: 3,
        shop: "Big Bazar Middenwaard",
        image: bigbazarmiddenwaard,
        franchise: "big bazar",
        adres: "Middenwaard 70, 1703 SH Heerhugowaard",
        lastconfirmed: "",
        has: [
            {
                id: 1,
                price: 0.00,
            },
            {
                id: 2,
                price: 0.00,
            },
            {
                id: 3,
                price: 0.00,
            },
            {
                id: 7,
                price: 0.00,
            },
            {
                id: 13,
                price: 0.00,
            },
            {
                id: 15,
                price: 0.00,
            },
            {
                id: 24,
                price: 0.00,
            },
        ]
    },
    {
        id: 4,
        shop: "Tropical Drimo",
        image: tropicaldrimo,
        franchise: "spar",
        adres: "Turbinestraat 5, 1014 AV Amsterdam",
        lastconfirmed: "",
        has: [
            {
                id: 1,
                price: 2.50,
            },
            {
                id: 2,
                price: 2.50,
            },
            {
                id: 4,
                price: 2.50,
            },
            {
                id: 5,
                price: 2.50,
            },
            {
                id: 6,
                price: 2.50,
            },
            {
                id: 7,
                price: 2.50,
            },
            {
                id: 8,
                price: 2.50,
            },
            {
                id: 11,
                price: 2.50,
            },
            {
                id: 12,
                price: 2.50,
            },
            {
                id: 13,
                price: 2.50,
            },
            {
                id: 14,
                price: 2.50,
            },
            {
                id: 15,
                price: 2.50,
            },
            {
                id: 19,
                price: 2.50,
            },
            {
                id: 20,
                price: 3.00,
            },
            {
                id: 24 ,
                price: 2.50,
            },
            {
                id: 25,
                price: 2.50,
            },
            {
                id: 26,
                price: 2.50,
            },
            {
                id: 28,
                price: 2.50,
            },
            {
                id: 29,
                price: 2.50,
            },
            {
                id: 30,
                price: 2.50,
            },
            {
                id: 34,
                price: 2.50,
            },
        ]
    },
    {
        id: 5,
        shop: "The Candy Corner",
        image: thecandycorner,
        franchise: "",
        adres: "Nieuwendijk 124, 1012 MS Amsterdam",
        lastconfirmed: "",
        has: [
            {
                id: 2,
                price: 3.99,
            },
            {
                id: 4,
                price: 2.99,
            },
            {
                id: 10,
                price: 3.99,
            },
            {
                id: 12,
                price: 2.99,
            },
            {
                id: 13,
                price: 3.99,
            },
            {
                id: 14,
                price: 2.99,
            },
            {
                id: 19,
                price: 3.99,
            },
            {
                id: 20,
                price: 3.99,
            },
            {
                id: 25,
                price: 3.99,
            },
            {
                id: 26,
                price: 2.99,
            },
            {
                id: 27,
                price: 3.99,
            },
            {
                id: 28,
                price: 3.99,
            },
            {
                id: 29,
                price: 2.99,
            },
            {
                id: 32,
                price: 4.99,
            },
            {
                id: 33,
                price: 4.99,
            },
            {
                id: 34,
                price: 2.99,
            },
        ]
    },
    {
        id: 6,
        shop: "Polski Sklep",
        image: polskisklep,
        franchise: "",
        adres: "Middenweg 135, 1702 HE Heerhugowaard",
        lastconfirmed: "17-06-2023",
        has: [
            {
                id: 6,
                price: 1.89,
            },
            {
                id: 7,
                price: 1.89,
            },
            {
                id: 19,
                price: 1.89,
            },
            {
                id: 25,
                price: 1.89,
            },
            {
                id: 29,
                price: 1.89,
            },
            {
                id: 34,
                price: 1.89,
            },
        ]
    },
];

export default shopsData;

/*
{
    id: 1,
    shop: "SPAR city Alkmaar",
    image: sparcityalkmaar,
    franchise: "spar",
    adres: "somehwere 25",
    lastconfirmed: "",
    has: [
        {
            id: 1,
            price: 2.49,
        },
    ]
},
*/
