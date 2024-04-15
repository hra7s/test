import  { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe('Contact us test cases', () => {
   
   //here we can right name test as it
it('should contact us page loaded or not', () => { 
   render(<Contact/>)

   const heading = screen.getByRole("heading");

   //Assertion
   expect(heading).toBeInTheDocument();
});

test('should load Button inside Contact component', () => { 
   render(<Contact/>)

   {/*on way to test button */}
   // const button = screen.getByRole("button");
const button= screen.getByText("SignIn")
   //Assertion
   expect(button).toBeInTheDocument();
});

test('should load input inside Contact component', () => { 
   render(<Contact/>)

   {/*on way to test button */}
   // const button = screen.getByRole("button");
const button= screen.getByPlaceholderText("name");
   //Assertion
   expect(button).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact component",()=>{
   render(<Contact/>);
   // const inputBoxes= screen.getByRole("textbox");
   //Querying
   const inputBoxes= screen.getAllByRole("textbox");
   // Assertion
   //console.log(inputBoxes)
    //console.log(inputBoxes.length)
   expect(inputBoxes.length).toBe(2);
  
})
});
