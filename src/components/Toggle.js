import React,{Component} from 'react'


class Toggle extends Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: true}
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return (
            <div>
                <button onClick={e => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }

}

    


export default Toggle;
