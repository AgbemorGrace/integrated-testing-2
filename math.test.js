const { sum, divide,multiply,subtract } =require("./math");

beforeAll(() => {
    console.log("Before All Test")
})

describe(" Function", () => {
    beforeEach(() => {
        console.log("Before Each");
    })

    it("should sum two numbers", () =>{
        expect(sum(5,3)).toBe(8);
    });

    it("should multiply two numbers", () =>{
        expect(multiply(3,3)).toBe(9);
    });

    it("should subtract two numbers", () =>{
        expect(subtract(8,2)).toBe(6);
    });
    it("should divide two numbers", () =>{
        expect(divide(12,3)).toBe(4);
    });
    afterEach(() => {
        console.log("After Each Test");
    });
});
afterEach(() => {
    console.log("Run After All Test");
});