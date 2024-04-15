import  {sum } from "../sum"

test('sum functions should calculate the sum of a+b', () => {
    const result = sum(3,4)

    //Assertion 
    expect(result).toBe(7);
    

 })



 