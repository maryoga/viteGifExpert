import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    
    test('debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan( 0 ); // comprobando que tenemos un arreglo de mas de 1 elemento
        expect( gifs[0]).toEqual({
            id: expect.any( String ),
            url: expect.any( String),
            title: expect.any( String)
        });
    });
});