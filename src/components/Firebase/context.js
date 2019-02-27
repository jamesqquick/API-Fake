import React from 'react';

const FirebaseContext = React.createContext(null);

//High order component - pass a component to this and will automatically get the
//firebase context
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;