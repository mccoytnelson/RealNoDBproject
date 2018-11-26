import React from 'react';
import './button.css'


function ImgButton(props) {
    let input3 = function (){if(props.input2 !== undefined){return props.input2}};
    return (
        <div>
            <div
                onClick={() => { props.deleter(props.id) }}
                class='delete'
            />
            <div
                onClick={() => { props.changer(props.id, props.input, props.input2)}}
                class='edit'
            />
        </div>
    
    )
    
}

export default ImgButton;