import React, { Component }  from 'react';
import { connect } from 'react-redux';

//MOOD IMAGES
import HorribleLogo from '../../Contents/Images/Horrible.png'
import BadLogo from '../../Contents/Images/Bad.png'
import AverageLogo from '../../Contents/Images/Average.png'
import GoodLogo from '../../Contents/Images/Good.png'
import GreatLogo from '../../Contents/Images/Great.png'

class Count extends Component {
    constructor(props){
        super(props)
          this.state = {
        }
    };

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

        let CountListDiv = []

        function CountOutputDiv(countList, name, index, moodCount, imgSrc){
            return(countList.push(<div className="StatsCountRow" key={index}><div><img alt={index} src={imgSrc}/></div><div>{moodCount}</div></div>))
        }


        moods.map((mood, index) => {
            if(mood.name === "Horrible"){
                CountOutputDiv(CountListDiv, mood.name, index, this.props.Horrible, HorribleLogo);
            }
            if(mood.name === "Bad"){
                CountOutputDiv(CountListDiv, mood.name, index, this.props.Bad, BadLogo);
            }
            if(mood.name === "Average"){
                CountOutputDiv(CountListDiv, mood.name, index, this.props.Average, AverageLogo);
            }
            if(mood.name === "Good"){
                CountOutputDiv(CountListDiv, mood.name, index, this.props.Good, GoodLogo);
            }
            if(mood.name === "Great"){
                CountOutputDiv(CountListDiv, mood.name, index, this.props.Great, GreatLogo);
            }

            return -1;
        })

        return (
            <div>
                {CountListDiv}
            </div>
        );
    };
}

function mapStateToProps(state) {
    return { 
        Horrible: state.Horrible,
        Bad:state.Bad,
        Average:state.Average,
        Good:state.Good,
        Great:state.Great 
    };
  }

export default connect(mapStateToProps)(Count);
