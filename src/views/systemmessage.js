import React from 'react'
import {Link} from 'react-router-dom'
import '../css/messagecenter.css'
export default class MessageCenter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[
                {id:1,unread:1,time:'09:43',title:'做任务得积分提醒',content:'您的营业执照审核已通过，获得了10积分'},
                {id:2,unread:1,time:'09:43',title:'做任务得积分提醒',content:'您的营业执照审核已通过，获得了10积分'},
                {id:3,unread:1,time:'09:43',title:'做任务得积分提醒',content:'您的营业执照审核已通过，获得了10积分'},
                {id:4,unread:0,time:'09:43',title:'做任务得积分提醒',content:'您的营业执照审核已通过，获得了10积分获得了10积分获得了10积分获得了10积分获得了10积分获得了10积分获得了'}
            ]
        }
    }
    render(){
        return(
            <div className="system-message">
                <header className="nav-bar">
                    <Link className="back" to="/message"></Link>
                    <span>系统消息</span>
                    <button className="ignore-all"><span>忽略全部</span></button>
                </header>
                <div className="message-list">
                    <ul>
                        {this.state.messages.map((message,idx)=>(<li key={idx}>
                            <span className="time">{message.time}</span>
                            <div className="message">
                                <p className={`title${message.unread ? ' unread' : ''}`}>{message.title}</p>
                                <p className="content">{message.content}</p>
                            </div>
                        </li>))}
                    </ul>
                </div>
            </div>
        );
    }
}
