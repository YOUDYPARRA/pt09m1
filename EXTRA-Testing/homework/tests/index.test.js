//  const { checkSeatStatus } = require('../homework');

// describe( ' ese nombre  complicado ', function(){

//   it('checkSeatStatus is a function', function()
//     expect(typeof checkSeatStatus).toBe('function')
// );
// it('Always true', () => {
//     expect(true).toBe(true);
// });

const multi = require('../homework');

describe('La funcion devuelve: ', () => {

    it('Debe retornar 35, si se usa 5 por 7', () => {
        expect(multi(7, 5)).toBe(35);
    });
    it('Debe retornar 0 si multiplica por 0', () => {
        expect(multi(0, 7)).toBe(0);
    });
    it('Retorna el mismo numero si multiplica por 1', () => {
        expect(multi(1, 7)).toBe(7);
    });

})