 import React,{Component} from 'react';
// import TOC from "./components/TOC"
// import Content from "./components/Content"
// import Subject from "./components/Subject"
import EventPractice from './components/EventPractice';
//import MyComponent from './components/MyComponent';
import './App.css';

 class App extends Component{
//   constructor(props){ //state 값 초기화
//     super(props);
//     this.state={
//       mode:'welcome',
//       subject:{title:'WEB',sub:'world wide web!'},
//       welcome:{title:'Welcome',desc:'Hello, React'},
//       contents:[
//         {id:1,title:'HTML',desc:'HTML is HyperText...'},
//         {id:2,title:'CSS',desc:'CSS is for design'},
//         {id:3,title:'HTML',desc:'JavaScript is for interactive'}
//       ]
//     }
//   }

   render(){
    return(
      <EventPractice></EventPractice>
    );
  }
 }
//     var _title, _desc=null;
//     if(this.state.mode==='welcome'){
//       _title=this.state.welcome.title;
//       _desc=this.state.welcome.desc
//     }
//     else if(this.state.mode==='read'){
//       _title=this.state.contents[0].title;
//       _desc=this.state.contents[0].desc;
//     }
//     return(
//       <div className='App'>
//       <header>
//         <h1><a href="/" onClick={function(){
//           alert('hi');
//         }}>{this.state.subject.title}</a></h1>
//         {this.state.subject.title} 
//       </header>
//         <TOC data={this.state.contents}></TOC>
//         <Content title={_title} sub={_desc}></Content>
//         <EventPractice></EventPractice>
//       </div>
//     );
//   }
// }

 export default App;
