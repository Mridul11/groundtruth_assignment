import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom' ;

function EndScreenComponent(){
    return(
        <div className="welcome">
            <Button type="primary">
                    <Link to="/">Home</Link>
                </Button>
                <Button type="primary">
                    <Link to="/quiz">Restart Quiz</Link>
                </Button>        
                <br />
                <br/>
            <p> Thanks for participation.</p>
        </div>
    )
}

export default EndScreenComponent ;