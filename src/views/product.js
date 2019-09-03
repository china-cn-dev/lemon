import React from 'react'
import {Link} from 'react-router-dom'
import {Carousel} from 'antd-mobile'
import '../css/product.css'
import t22 from '../assets/temp22.jpg'
import t23 from '../assets/temp23.jpg'
import t24 from '../assets/temp24.jpg'
export default class Product extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
        this.state = {
            pid:this.props.match.params.id,
            productImages:[t22,t22,t22,t22],
            recommends:[
                {id:11,url:t24,title:'磐众智能22寸卧式触摸一体',price:'68.00'},
                {id:12,url:t24,title:'磐众智能22寸卧式触摸一体',price:'68.00'},
                {id:13,url:t24,title:'磐众智能22寸卧式触摸一体',price:'68.00'},
                {id:14,url:t24,title:'磐众智能22寸卧式触摸一体',price:'68.00'},
                {id:15,url:t24,title:'磐众智能22寸卧式触摸一体',price:'68.00'},
                {id:16,url:t24,title:'磐众智能22寸卧式触摸一体',price:'68.00'}
            ]
        }
    }
    render(){
        return(
            <div className="product">
                <header className="nav-bar">
                    <span className="circle-back" onClick={()=>{this.props.history.goBack()}}></span>
                    <span className="circle-more"></span>
                </header>
                <div className="carousel-wrapper">
                    <Carousel>
                        {this.state.productImages.map((url,idx)=>(
                            <div className="img-wrap" key={idx}>
                                <Link to={{pathname:`/product/${this.state.pid}/details`,state:{id:this.state.pid}}}><img src={url} alt=""/></Link>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="product-intro">
                    <div className="title-wrap">
                        <p className="title">内装饰品小车方向盘套真皮四季通用运动款汽车把套女装饰品装饰品装饰品</p>
                        <span className="share">分享</span>
                    </div>
                    <div className="price-range">
                        <div className="item">
                            <span className="price">&yen;<em>28.50</em></span>
                            <span className="nums">100-199台</span>
                        </div>
                        <div className="item">
                            <span className="price">&yen;<em>28.50</em></span>
                            <span className="nums">100-199台</span>
                        </div>
                        <div className="item">
                            <span className="price">&yen;<em>28.50</em></span>
                            <span className="nums">100-199台</span>
                        </div>
                    </div>
                    <div className="extra-info-wrap">
                        <span>库存 1000件</span>
                        <span>发货期 3天内</span>
                        <span>所在地区 广东 广州</span>
                    </div>
                </div>
                <div className="company-info">
                    <img className="logo" src={t23} alt=""/>
                    <p className="company-name">济宁市安源机械设备有限公司</p>
                    <i className="xmt"></i>
                    <div className="nav-group">
                        <Link className="nav-to-store" to="/">进入店铺</Link>
                        <Link className="nav-to-newest" to="/">最新产品</Link>
                    </div>
                </div>
                <div className="recommends">
                    <div className="wrap">
                        <p>店内推荐</p>
                        <ul>
                            {
                                this.state.recommends.map((item,idx)=>(
                                    <li key={idx}>
                                        <div className="product-img" ><img src={item.url} alt=""/></div>
                                        <span className="product-name">{item.title}</span>
                                        <span className="price">&yen;<em>{item.price}</em></span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="fixed-bottom">
                    <div className="left">
                        <Link className="message" to="/">留言</Link>
                        <span className="collect">收藏</span>
                        <Link className="store" to="/">进店</Link>
                    </div>
                    <a className="qq" href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=china.cn&menu=yes">QQ交谈</a>
                    <a className="phone" href="tel:10086">电话联系</a>
                </div>
            </div>
        )
    }
}
