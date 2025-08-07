import React from 'react'

function QuesIndicator(props) {
    return (
        <div>
            <div className="pentagon" style={{backgroundColor: props.color}}>
                <span className="quesIndicator">{props.number} </span>
            </div>
        </div>
    )
}

export default QuesIndicator
