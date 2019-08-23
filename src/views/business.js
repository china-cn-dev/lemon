import React from 'react'
import { Carousel} from 'antd-mobile';
import { Link } from 'react-router-dom'
import '../css/discover.css'
import temp12 from '../assets/temp12.jpg'
import temp13 from '../assets/temp13.jpg'
import temp14 from '../assets/temp14.jpg'
export default class Business extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dotStyle:{
                width:'0.14rem',
                height:'0.14rem',
                background:'#fff',
            },
            dotActiveStyle:{
                width:'0.14rem',
                height:'0.14rem',
                background:'#e60000'
            },
            carousel:[
                {url:temp12,txt:'最近火的不行的可爱小怪售'},
                {url:temp12,txt:'最近火的不行的可爱小怪售'},
                {url:temp12,txt:'最近火的不行的可爱小怪售'},
                {url:temp12,txt:'最近火的不行的可爱小怪售'},
                {url:temp12,txt:'最近火的不行的可爱小怪售'}
            ],
            news:[
                {id:1,url:temp13,title:'大事件 百家讲谈招募导师啦，寻找优秀的你 ',views:7631,date:'11-08'},
                {id:2,url:temp14,title:'十九届二中全会 今起召开 这些你应该知道',views:7631,date:'11-08'},
                {id:3,url:temp13,title:'大事件 百家讲谈招募导师啦，寻找优秀的你 ',views:7631,date:'11-08'},
                {id:4,url:temp14,title:'十九届二中全会 今起召开 这些你应该知道',views:7631,date:'11-08'},
                {id:5,url:temp14,title:'十九届二中全会 今起召开 这些你应该知道',views:7631,date:'11-08'}
            ]
        }
    }
    render(){
        return(
            <div className="business">
                <div className="carousel-wrapper">
                    <Carousel dotStyle={this.state.dotStyle} dotActiveStyle={this.state.dotActiveStyle}>
                        {
                            this.state.carousel.map((item,idx)=>(<div key={idx} className="item"><img src={item.url} alt=""/><span className="txt">{item.txt}</span></div>))
                        }
                    </Carousel>
                    <div className="news">
                        <ul>
                            {
                                this.state.news.map(item=>(
                                    <li key={item.id}>
                                        <img src={item.url} alt=""/>
                                        <div>
                                            <p className="caption"><Link to={`/news/${item.id}`}>{item.title}</Link></p>
                                            <div className="pendant">
                                                <span className="views">{item.views}</span><span className="publish-date">{item.date}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
