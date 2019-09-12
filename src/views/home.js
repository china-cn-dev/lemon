import React from 'react';
import { Link,NavLink } from 'react-router-dom'
import { Carousel} from 'antd-mobile';
import FooterBar from './common/footerbar'
import '../css/home.css';
import tempImg1 from '../assets/temp1.jpg';
import tempImg2 from '../assets/temp2.jpg';
import tempImg3 from '../assets/temp3.jpg';
import tempImg4 from '../assets/temp4.jpg';
import tempImg5 from '../assets/temp5.jpg';
import tempImg6 from '../assets/temp6.jpg';
import tempImg7 from '../assets/temp7.jpg';
import tempImg8 from '../assets/temp8.jpg';
import tempImg9 from '../assets/temp9.jpg';
import slogon from '../assets/slogon.jpg';

export default class Home extends React.Component{
    componentWillMount(){

    }
    render(){
        return(
            <div className="app">
                <div className="home">
                    <div className="fixed-bar">
                        <i className="scan"></i>
                        <Link className="search" to="/search">输入关键词，开始搜索</Link>
                        <Link className="message" to="/message"><em>10</em></Link>
                    </div>
                    <div className="carousel-wrapper">
                        <Carousel>
                            <div className="item"> <img src={tempImg1} alt=""/> </div>
                            <div className="item"> <img src={tempImg1} alt=""/> </div>
                        </Carousel>
                    </div>
                    <div className="subject-box">
                        <div className="left">
                            <p>安平丝网</p>
                            <span>丝网批发集散地</span>
                            <em>产地直销</em>
                            <img src={tempImg2} alt=""/>
                        </div>
                        <div className="right">
                            <div className="rtop">
                                <p>管材管件</p>
                                <span>钢材行业新风表</span>
                                <em>市场热销</em>
                                <img src={tempImg3} alt=""/>
                            </div>
                            <div className="rbottom">
                                <p>阀门网</p>
                                <span>工业生产必不可少</span>
                                <em>全新上线</em>
                                <img src={tempImg4} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="ranking"><em className="text-danger">排行榜</em> 12月热门商铺排行榜出炉啦！</div>
                    <div className="subject">
                        <p><em className="text-danger">专题</em>精选</p>
                        <ul>
                            <li>
                                <img src={tempImg5} alt=""/>
                                <p>儿童游乐设备</p>
                                <span>年度最火挖掘机</span>
                            </li>
                            <li>
                                <img src={tempImg6} alt=""/>
                                <p>工艺品 礼品</p>
                                <span>汇聚精巧与细致</span>
                            </li>
                            <li>
                                <img src={tempImg7} alt=""/>
                                <p>鲜花养殖基地</p>
                                <span>小额批发最有选择</span>
                            </li>
                        </ul>
                    </div>
                    <div className="recommends">
                        <p className="caption">货源精选</p>
                        <div className="sub-caption"><span>精品好货源</span></div>
                        <div className="products">
                            <Carousel>
                                <div className="group">
                                    <div className="item">
                                        <img src={tempImg8} alt=""/>
                                        <p className="product-name">高精密冲床</p>
                                        <p className="feature">易懂 易操作</p>
                                        <p className="price">&yen;68.00</p>
                                    </div>
                                    <div className="item">
                                        <img src={tempImg8} alt=""/>
                                        <p className="product-name">高精密冲床</p>
                                        <p className="feature">易懂 易操作</p>
                                        <p className="price">&yen;68.00</p>
                                    </div>
                                    <div className="item">
                                        <img src={tempImg8} alt=""/>
                                        <p className="product-name">高精密冲床</p>
                                        <p className="feature">易懂 易操作</p>
                                        <p className="price">&yen;68.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="item">
                                        <img src={tempImg8} alt=""/>
                                        <p className="product-name">高精密冲床</p>
                                        <p className="feature">易懂 易操作</p>
                                        <p className="price">&yen;68.00</p>
                                    </div>
                                    <div className="item">
                                        <img src={tempImg8} alt=""/>
                                        <p className="product-name">高精密冲床</p>
                                        <p className="feature">易懂 易操作</p>
                                        <p className="price">&yen;68.00</p>
                                    </div>
                                    <div className="item">
                                        <img src={tempImg8} alt=""/>
                                        <p className="product-name">高精密冲床</p>
                                        <p className="feature">易懂 易操作</p>
                                        <p className="price">&yen;68.00</p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="companies">
                    <p><em className="text-danger">企业</em>推荐</p>
                    <img src={slogon} alt=""/>
                    <div className="wrap">
                        <div className="item">
                            <img src={tempImg9} alt=""/>
                            <p className="company-name">游乐设备</p>
                            <p className="company-info">自动化</p>
                        </div>
                        <div className="item">
                            <img src={tempImg9} alt=""/>
                            <p className="company-name">食品烘焙</p>
                            <p className="company-info">只为更好的烹饪</p>
                        </div>
                        <div className="item">
                            <img src={tempImg9} alt=""/>
                            <p className="company-name">冷冻油</p>
                            <p className="company-info">高精度 高品质</p>
                        </div>
                        <div className="item">
                            <img src={tempImg9} alt=""/>
                            <p className="company-name">家装建材</p>
                            <p className="company-info">只为更好的烹饪</p>
                        </div>
                        <div className="item">
                            <img src={tempImg9} alt=""/>
                            <p className="company-name">管气管道</p>
                            <p className="company-info">品质保证</p>
                        </div>
                        <div className="item">
                            <img src={tempImg9} alt=""/>
                            <p className="company-name">食品设备</p>
                            <p className="company-info">高精度 高品质</p>
                        </div>
                    </div>
                </div>
                </div>
                <FooterBar/>
            </div>
        );
    }
}
