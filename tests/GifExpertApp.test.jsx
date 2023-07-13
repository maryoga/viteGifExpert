import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
    test('debe aparecer el texto GifExpertApp', () => {
        render( <GifExpertApp />);
        expect(screen.getByText('GifExpertApp'));
    });

    test('no debe añadir dos categorias iguales, diferenciar mayusculas de minusculas', () => {
        render( <GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Saddie'}});
        fireEvent.submit(form);

        fireEvent.input( input, { target: { value: 'Saddie'}});
        fireEvent.submit(form);

        expect(screen.queryByText('saddie')).toBeFalsy();

    });
});