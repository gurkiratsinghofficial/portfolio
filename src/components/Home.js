import React from 'react'

function Home() {
    return (
        <div className="home">
            <div className="row">
                <div className="column1">
                    <img className="logoimg" src={require('../new.png')} />                                         
                </div>
                <div className="column2">
                <h1 >I am Gurkirat Singh</h1>
            <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi pellentesque magna eu consequat egestas. Nullam faucibus
                 est vel ex consectetur rutrum. Duis est felis, posuere vel suscipit 
                 vel, egestas ac leo. Nunc sed nunc scelerisque, congue ipsum sed, ullamcorper
                  erat. Morbi libero dolor, euismod a elit ut, feugiat tempus magna. Praesent porta nibh a neque convallis,</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home
