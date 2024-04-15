import { render } from "@testing-library/react"
import Body from "../Body"
import {act} from "react-dom/test-utils"

import Mock_Data from "../mocks/mockResList.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_Data);
        }
    })

})
// it("Should Render the Body Component",async ()=>{

//     await act(async()=> render(<Body/>))
   
// })
// we got an error that is link component doesnot exit for that we need to wrap it up in a browseRouter

it("Should Render the Body Component",async ()=>{

    await act(async()=> render(
        <BrowserRouter> <Body/></BrowserRouter>
   ))

   const searchBtn= screen.getByRole("button",{name: "Search"})

   expect(searchBtn).toBeInTheDocument()
   
})