import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        // useFetchGif es una función, y este objeto que está entre las llaves es lo que voy a simular que está regresando esta función
        useFetchGifs.mockReturnValue({
            images:[], // si es el loading inicial, las imagenes vienen con un arreglo vacío
            isLoading: true, // el isLoading estará en true al iniciar
        });

        render( <GifGrid category= { category } /> );
        expect( screen.getByText( 'Loading...' )); // esperamos que el texto que contenga el elemento diga 'Loading...'
        expect( screen.getByText( category ) ); // esperamos que contenga la categoría 'One Punch'
    });

    test('debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs', () => {

        // que objeto tendremos a continuación, recordar que estamos con data ficticia, creamos varias imagenes, array de Gifs
        const gifs = [
            {
                id: 'ABC',
                url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/2015730/univ/art/2015730_univ_lsr_xl.jpg',
                title: 'Saddie'
            },
            {
                id: '123',
                url: 'https://localhost/goku.jpg',
                title: 'Goku'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false, // el isLoading estará en false luego de cargar las imagenes
        });

        render( <GifGrid category= { category } /> );
        // se usa el getAllByRole porque estoy esperando mas de un registro de imagen
        expect( screen.getAllByRole('img').length ).toBe(2); 
        // screen.debug();
    });
});