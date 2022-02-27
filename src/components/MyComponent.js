import React,{Component} from 'react';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={ //state 초기값 지정
            number:0
        }
    }
    render(){
        return(
            <div>
            <p>안녕하세요{this.props.name}</p>
            <p>{this.state.number}</p>
            <button onClick={()=>{
                this.setState({ //state 값 업데이트
                    number:this.state.number+1
                })
            }
        }></button>
        </div>
        )
    }
}
export default MyComponent;