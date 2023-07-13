import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe regresar el estado inicial', () => {
        // nos creamos un callback en la que llamamos a la función useFetchGifs, esta requiere la categoría
        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe( 0 ); // es el estado inicial del hook, no hay ninguna imagen
        expect( isLoading ).toBeTruthy(); // comprobar que el isLoading sea verdadero.
    });

    test('debe retornar un arreglo de imagenes y el isLoading en false', async() => {
        // nos creamos un callback en la que llamamos a la función useFetchGifs, esta requiere la categoría
        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) ); // renderizamos el hook, mandamos la misma instrucción

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        // tengo que hacer las mismas aserciones de la misma manera, evaluar cuando ya se carguen las imágenes
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0); // que tenga imagenes
        expect( isLoading ).toBeFalsy(); // comprobar que el isLoading sea false, ya no está cargando.
    });
});