import React from 'react'

function Alert() {
    return (
        <div>
            <div >
                <div className="alert error">
                    <input type="checkbox" id="alert1"/>
                        <label className="close" title="close" for="alert1">
                        <i className="icon-remove"></i>
                        </label>
                    <p className="inner">
                        <strong>Warning!</strong> The alerts are too damn awesome!
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Alert
