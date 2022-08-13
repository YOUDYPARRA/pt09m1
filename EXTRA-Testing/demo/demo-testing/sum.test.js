var sum = require ('./sum');

// it === test
it( 'should return 8 if adding 3 and 5',() => {
    expect( sum( 3, 5 )). toBe(8) ;
});

it('should always pass', () => { 
    expect(true).toBe(true);
})