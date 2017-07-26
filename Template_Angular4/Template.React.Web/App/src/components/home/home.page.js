import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron" >
                <h1>Administraction</h1>
                <p>React home page</p>
                <Link to="about" className="btn btn-primary btn-lg" />
            </div>
        );
    }
}

export default HomePage;