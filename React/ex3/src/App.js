import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import Adduser from "./components/Adduser";

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.state =  {users: [
    {id: 1,
    firstname: "Bob",
    lastname: "Marly",
    bio: " lorem",
    age: 40,
    isHappy: true}, 
    {
        id: 2,
        firstname: "John",
        lastname: "Doe",
        bio: " lorem",
        age: 22,
        isHappy: false
    }
]}
this.addUser = this.addUser.bind(this)
}
  render() {
    return (
      <div>
        <Header title="List of users" />
        <main>
            <Users users={this.state.users}/>
        </main>
        <aside>
            <Adduser onAdd={this.addUser}/>
        </aside>
      </div>
    );
  }
    addUser(user) {
      const id = this.state.users.length + 1
      this.setState({ users: [...this.state.users, {id, ...user}]})
    }
}

export default App;
