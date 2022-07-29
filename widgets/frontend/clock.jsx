import React from "react";

class Clock extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }

        this.tick = this.tick.bind(this);
    }

    tick = () => {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval); 
    }

    render = () => {
        return(
            <div id="anything">
                <h2 id="time">
                    Time: {(this.state.time.toTimeString()).split(0, 8)}
                </h2>
                <h2 id="date">
                    Date: {this.state.time.toDateString()}
                </h2>
            </div>
        )
    }
}
export default Clock