import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Test in <GifItem />', () => {

    const title = 'Saddie';
    const url = 'https://assetsnffrgf-a.akamaihd.net/assets/m/2015730/univ/art/2015730_univ_lsr_xl.jpg';

    test('Debe hacer match con el snapshot ', () => {
        const { container } = render(<GifItem title= { title } url= { url } />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title= { title } url= { url } />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url ); // lo evaluo por el 'URL'
        // Código más limpio, hago desestructuración de la imagen, usando el source 'src', y el texto alternativo 'alt'
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title= { title } url= { url } />);
        expect( screen.getByText( title )).toBeTruthy(); // validar que el titulo exista
    });
});