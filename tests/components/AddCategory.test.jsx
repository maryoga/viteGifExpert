import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        // Se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={ () => { } } />);

        // Extraemos el input, el cual tiene una relaciónn directa con el screen.getByRole
        const input = screen.getByRole('textbox');
        // Disparamos el evento
        fireEvent.input( input, { target: { value: 'Saddie' } } );
        // Hacemos la aserción de lo que estamos esperando que suceda después del evento
        expect( input.value ).toBe('Saddie');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saddie';
        const onNewCategory = jest.fn(); // fn ficticia

        // TODO: ???

        render(<AddCategory onNewCategory={ onNewCategory } />);

        // Extraer la referencia al input, y al formulario, esta pasa por referencia el último valor a input
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Disparamos el evento
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        // evaluaré la fn ficticia que he eclarado con jest.fn() y puedo preguntar que esa fn haya sido llamada si no seria error 
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // estoy esperando que esta fn haya sido llamada solo una vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // evaluando que haya sido llamada con el valor de la caja de texto

    });

    test('no debe de llamar el onNewCategory si el input está vacio', () => {
        const onNewCategory = jest.fn(); // fn ficticia
        render(<AddCategory onNewCategory={ onNewCategory } />);

        // Extraer la referencia al formulario
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        // screen.debug();
        // hacer la asersión, estaría esperando que nuestra jest.fn 'onNewCategory' no haya sido llamada, hay varias formas de hacerlo
        expect( onNewCategory ).toHaveBeenCalledTimes(0); // probar que haya sido llamado 0 veces la función
        expect( onNewCategory ).not.toHaveBeenCalled(); // probar que no haya sido llamada la función
    });
});