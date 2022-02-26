import React, { Component } from "react";

class EventPractice extends Component{

    state={
        message:''
    }

    render(){
     return(
        <div>
         <h1>이벤트 연습</h1>
         <input //input 요소를 렌더링하는 코드
          type="text"
          name="message"
          placeholder="입력하세요"
          value={this.state.message}
          onChange={
              (e)=>{
                  this.setState({
                    message: e.target.value
                  })
              }
          }
         />
        </div>
        
      );
    }
}

export default EventPractice;