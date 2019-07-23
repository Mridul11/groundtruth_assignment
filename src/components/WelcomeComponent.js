import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

function WelcomeComponent(){
    return(
        <div className="welcome">
            <Button type="primary">
                <Link to="/">Home</Link>
            </Button>
            <Button type="primary">
                <Link to="/quiz">Start Quiz</Link>
            </Button>
        <br />
            
        </div>
    )
}

export default WelcomeComponent ;