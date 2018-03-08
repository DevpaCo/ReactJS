import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return(
            <div style={style.divRootStyle}>
                <div style={style.divHeaderStyle}>
                    <h2 style={style.textBoldHeaderStyle}>
                    NOTE TO DRIVER
                    </h2>
                </div>
                <div style={style.divTextArea}>
                    <textarea style={style.textArea}>
                        {`"Please add message (Ex. size, weight, fragile, payment and etc..)`}
                    </textarea>
                </div>
            </div>
        )
    }
}

const style = {
    divRootStyle: {
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'inline-block'
    },
    divHeaderStyle: {
        textAlign: 'center',
        height: '136px',
        width: '90%',
        display: 'inline-block',
        backgroundColor: 'lightgray',
        lineHeight: '16px',
        padding: '5%'
    },
    textBoldHeaderStyle: {
        justifyItems: 'auto',
        color:'white',
        textAlign : 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        lineHeight: '8px'
    },
    divTextArea: {
        height: '98%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textArea: {
        width: '98%',
        height: '100%',
        flex: 1,
        row: '10',
        position: 'absolute',
        border: '1px solid lightgreen'
    }
}