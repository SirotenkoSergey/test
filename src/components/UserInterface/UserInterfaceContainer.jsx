import React from "react";
import UserInterface from './UserInterface';

class UserInterfaceContainer extends React.Component {
     render() {
        return ( <UserInterface {...this.props} />);
    }
}

export default UserInterfaceContainer;