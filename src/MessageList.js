import React, {Component} from 'react';
import { db } from "./firebase";


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.wrapperRef = React.createRef();
        
    }
    componentWillMount(){
        this.getMessageList();
    }
    getMessageList = () =>{
        db.collection("messages")
        .get()
        .then(querySnapshot => {
            let fullArray = [];
            const data = querySnapshot.docs.map(doc => doc.data());
            for(var int = 0; int < data.length; int++){
                fullArray[int] = {
                    name: data[int].name,
                    date:data[int].date,
                    check:data[int].check,
                    id: querySnapshot.docs[int].id,
                }
            }
            this.setState({ users: fullArray });
            // console.log(this.state.users);
        });
    }
    addMessageRow = () => {
        db.collection("messages").add({
            name: document.getElementsByClassName('name')[0].value,
            date: document.getElementsByClassName('date')[0].value,
            check:false
        });
        this.setState({
            users: [...this.state.users, {
                name: document.getElementsByClassName('name')[0].value,
                date:document.getElementsByClassName('date')[0].val,
                check:false,
            }],
          })
    }
    checkBox = (id,check)=>{
        let result = '';
        if(check == true){
            result = false;
        }else{
            result = true;
        }
        db.collection("messages")
        .doc(id)
        .update({
            check:result,
        });
    }
    addData = () =>{
        this.setState({
            users: [...this.state.users, {
                name: '2222',
                date:'111',
                check:true,
                id: 'sdfsdf'
            }],
          })
        console.log(this.state.users);

    }
    deleteRow = (id) =>{
        db.collection("messages").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    handleClick(key){
        // const wrapper = this.wrapperRef.current;
        // wrapper.classList.toggle('userGreen');
        document.getElementById(key).classList.toggle('userGreen');
        
    }
    render(){  
        //this.getMessageList();
        console.log(this.wrapperRef);
        return (
        <div className="main_block">
            MessageList Component
            <div>
                <input className="name" type="text" name="name"/>
                <input className="date" type="text" name="date"/>
                <div onClick={this.addMessageRow}>Save</div>
            </div>
            {this.state.users.map((user,key)=>(
                <div ref={this.wrapperRef} id={`key${key}`} className={`user`} onClick={()=>this.handleClick(`key${key}`)}>
                    <div className="nameColor">{user.name}</div>
                    <div>{user.data}</div>
                    <div onClick={this.checkBox.bind(this,user.id,user.check)}>{user.check?"on":"off"}</div>
                    <div onClick={this.addData}>Add data</div>
                    <div onClick={this.deleteRow.bind(this,user.id)}>Delete</div>
                </div>
            ))}        
        </div>
        )
    }
}
//<input type="checkbox" onClick={this.checkBox.bind(this)}/>
export default MessageList