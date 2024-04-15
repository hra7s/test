// import React from "react"


// export class UserClass extends React.Component {
// constructor(props){
//     super(props);
//     console.log(props)

// }

// render() {
//     return (
//     <div className="border-2 border-green-400 p-4 m-4 text-center">
//         <h2>
//             Name: {this.props.name}
//         </h2>
//         <h3>Location: Delhi</h3>
//         <h4>Contact: 123445</h4>
//     </div>
//     )
//   }
// }

// export default UserClass
import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/hra7s");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    //console.log("Component Did Update");
  }

  componentWillUnmount() {
    //console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @phani</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */