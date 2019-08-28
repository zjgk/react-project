import React from 'react';

 export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }
    // 加1
    increase() {
        let self = this;
        self.setState({ number: self.state.number + 1 })
    }
    // 减一
    decrease() {
        let self = this;
        self.setState({ number: self.state.number - 1 })

    }


    render() {
        return ( 
            <div>
              登录的
            </div> )
    }
}