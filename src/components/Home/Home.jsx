import React, {  useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/authContext';

const Home = () => {
    const useeinfo =useContext(AuthContext)
    console.log(useeinfo);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;