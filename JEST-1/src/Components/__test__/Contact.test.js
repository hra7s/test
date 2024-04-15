import  { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('ContactUs page testing', () => {
   
   //here we can right it insteaded of test
   test('should contact us page loaded or not', () => { 
      render(<Contact/>)
   
  
      const heading = screen.getAllByRole("heading");
   
  
      //Assertion
      expect(heading).toBeInTheDocument();
   });
  
   it('should load Button inside Contact component', () => { 
      render(<Contact/>)
  
      {/*on way to test button */}
      // const button = screen.getByRole("button");
   const button= screen.getByText("SignIn")
      //Assertion
      expect(button).toBeInTheDocument();
   });
   
   it('should load input inside Contact component', () => { 
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


