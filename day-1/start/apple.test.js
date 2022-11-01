import apple from "./apple";

describe("my apple", ()=>{
    //i want to test wether apple is juicy
    test("is this apple juicy?", ()=> {
        expect(apple.texture).toEqual("juicy")
    })

    test("is this apple red?", ()=> {
        expect(apple.color).toEqual("red")
    })

    test("is this apple delicious?", ()=> {
        expect(apple.rating).toBeGreaterThan(5)
    })

    test("is this apple domestic?", ()=> {
        expect(apple.isImported).not.toBeTruthy()
    })

    test("is this apple not imported?", ()=> {
        expect(apple.isImported).toEqual(false)
    })
})