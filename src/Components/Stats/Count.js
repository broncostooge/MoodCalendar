import React, { Component }  from 'react';

export default class Count extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {

        const moods =  [
            {
                name: "Horrible", 
                color: "Red"
            }, 
            {
                name: "Bad", 
                color: "Orange"
            },
            {
                name: "Average", 
                color: "Yellow"
            },
            {
                name: "Good", 
                color: "Blue"
            },
            {
                name: "Great", 
                color: "Green"
            }
        ]

        let CountList = []

        moods.map((mood, index) => {
            return CountList.push(<tr key={index}>{mood.name}Count:<td key={index} className={mood.name+'Count'}>0</td></tr>)
        })

        return (
            <div>
                <h3>Count</h3>
                <table>
                    <tbody>
                        {CountList}
                    </tbody>
                </table>
            </div>
        )
    }
}