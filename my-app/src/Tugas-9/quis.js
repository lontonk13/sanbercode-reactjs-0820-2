import React, {Component} from 'react';

onst data = [
  {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"},
  {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"},
  {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"},
  {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }]


class ShowImg extends React.Component{
  render(){
    return <img src={this.props.photo} alt="foto orang"/>
  }
}

class ShowName extends React.Component {
  renderSwitch(param) {
  switch(param) {
    case 'Male':
      return 'Mr.';
    case 'Female':
      return 'Mrs.';
    }
  render(){

    return <h5 style={{lineHeight: '0'}}>{this.renderSwitch(this.props.gender)}{this.props.name}</h5>
  }
}
}
class ShowAge extends React.Component {
  render(){
    return <div style={{lineHeight: '3'}}> {this.props.age} years old </div>
  }
}
class ShowProf extends React.Component{
  render(){
    return <div> {this.props.profession} </div>
  }
}
class Quis extends React.Component{
   render(){
         return (
           <div>
             {data.map(el=> {
               return (
                 <div style={{border: "1px solid #000", padding: "20px",display: 'inline-block', margin:'50px',padding: '20px',borderRadius: '10px', width:'250px',flexdirection:'column'}}>
                  <ShowImg img={el.photo}/>
                   <ShowName name={el.name}/>
                   <ShowProf profession={el.profession}/>
                   <ShowAge age={el.age}/>
                 </div>
               )
             })}
           </div>
         )
       }
     }

 export default Quis;
