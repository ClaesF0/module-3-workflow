const cloneArray = require('./cloneArray');

test ("clone an array", ()=>{
    const arr = [1,2,3];
    expect(cloneArray(arr)).toEqual(arr);
})