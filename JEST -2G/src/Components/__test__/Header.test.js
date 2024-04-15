import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/store/appStore"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
// test('Should loaded with login Button', () => { 

//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//              <Header/>
//         </Provider>
//         </BrowserRouter> 
//    )

// const loginButton= screen.getByRole("button",{login:"Login"});
// //const loginButton= screen.getByText("Login");
//    expect(loginButton).toBeInTheDocument()

//  })

// test('Should loaded with Cart Items ', () => { 

//      render(
//          <BrowserRouter>
//          <Provider store={appStore}>
//               <Header/>
//          </Provider>
//          </BrowserRouter> 
//     )
 
// //  const cartItems= screen.getByText("Cart- (2 items)");

//  //const loginButton= screen.getByText("Login");
//  const cartItems=screen.getByText(/Cart/);
// expect(cartItems).toBeInTheDocument();
 
//   })


test('Should Change Login button to logout', () => { 

     render(
         <BrowserRouter>
         <Provider store={appStore}>
              <Header/>
         </Provider>
         </BrowserRouter> 
    )
 
//  const cartItems= screen.getByText("Cart- (2 items)");

 const loginButton= screen.getByRole("button",{name:"Login"});
 fireEvent.click(loginButton)
 const logoutButton = screen.getByRole("button",{name:"LogOut"});
//  const cartItems=screen.getByText(/Cart/);
// expect(cartItems).toBeInTheDocument();
expect(logoutButton).toBeInTheDocument();
 
  })

