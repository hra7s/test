import {render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Mock_Data from "../mocks/mockData.json"
import "@testing-library/jest-dom"

it("Should render Rescard with props data",()=>{
    render(<RestaurantCard resData={Mock_Data}/>)

    const name =screen.getByText("Leon's - Burgers & Wings (Leon Grill)")

    expect(name).toBeInTheDocument();

})