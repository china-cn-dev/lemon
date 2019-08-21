import React from 'react'
import { Carousel} from 'antd-mobile';
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
                            <li>
                                <img src={temp13} alt=""/>
                                <div>
                                    <p className="caption">大事件 百家讲谈招募导师啦，寻找优秀的你 </p>
                                    <div className="pendant">
                                        <span className="views">7631</span><span className="publish-date">11-08</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={temp14} alt=""/>
                                <div>
                                    <p className="caption">十九届二中全会 今起召开 这些你应该知道</p>
                                    <div className="pendant">
                                        <span className="views">7631</span><span className="publish-date">11-08</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={temp13} alt=""/>
                                <div>
                                    <p className="caption">大事件 百家讲谈招募导师啦，寻找优秀的你 </p>
                                    <div className="pendant">
                                        <span className="views">7631</span><span className="publish-date">11-08</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={temp14} alt=""/>
                                <div>
                                    <p className="caption">十九届二中全会 今起召开 这些你应该知道</p>
                                    <div className="pendant">
                                        <span className="views">7631</span><span className="publish-date">11-08</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
