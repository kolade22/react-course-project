import React from "react";
import { Component } from "react";

class ClassBasedComponent extends Component {

state = {
    data : []
}

componentDidMount() {
    this.getData()
}

getData = async()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    if(data && data.length) {
        this.setState({
            data
        })
    }
}
//   state = {
//     formData: {
//       age: 0,
//       name: "",
//     },
//   };
//   handleNameChange = (event) => {
//     const { value } = event.target;

//     this.setState((prevState) => ({
//       formData: {
//         ...prevState.formData,
//         age: value,
//       },
//     }));
//   };
//   handleAgeChange = (event) => {
//     const { value } = event.target;

//     this.setState((prevState) => ({
//       formData: {
//         ...prevState.formData,
//         name: value,
//       },
//     }));
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//   };

  // handleClick =() => {
  //     const {count} = this.state;

  //     this.setState (
  //         {
  //             count : count + 1
  //         }, () => {
  //             console.log(this.state);
  //         }
  //     )
  // }

  // componentDidMount() {
  //     console.log("component is here");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //     console.log(prevState, this.state);
  //    if(prevState && prevState.count !== this.state.count && this.state.count === 10) {
  //     this.setState({
  //         flag : true
  //     })
  //    }
  // }

  // componentWillUnmount() {

  // }

  render() {
    // console.log(this.state.formData);
    console.log(this.state);
    return (
      <div>
        {/* <button onClick={this.handleClick}>Click</button>
              <br />
              {
                this.state.count === 7 && "Max is 7."
              }

              {
                this.state.flag && <p>Flag is true</p>
              } */}
        {/* <form onSubmit={this.handleSubmit} action="#">
          Name :
          <input
            className="name"
            name="name"
            placeholder="Name"
            type={"text"}
            value={this.state.formData.name}
            onChange={this.handleNameChange}
          />
          <br />
          Age :
          <input
            className="age"
            name="age"
            placeholder="Age"
            type={"number"}
            value={this.state.formData.age}
            onChange={this.handleAgeChange}
          />
          <br />
          <button className="btn" type="submit" aria-label="submit">
            Submit
          </button>
        </form> */}
        {
            this.state.data && this.state.data.length > 0 ? this.state.data.map((dataItem, index)=> (
               <p key={'${dataItem.id}${index}'}>{dataItem.title}</p> 
            )) : null
        }
      </div>
    );
  }
}

export default ClassBasedComponent;
