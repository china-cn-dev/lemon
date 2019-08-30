import React from 'react'
import {Link} from 'react-router-dom'
import '../css/product.css'
export default class Product extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.match.params)
    }
    render(){
        return(
            <div className="product">
                <header className="nav-bar">
                    <span className="circle-back" onClick={()=>{this.props.history.goBack()}}></span>
                    <span className="circle-more"></span>
                </header>
                <div></div>
                <div>
                    <div>
                        <p>内装饰品小车方向盘套真皮四季通用运动款汽车把套女装饰品装饰品装饰品</p>
                        <span>分享</span>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <span>&yen;<em>28.50</em></span>
                                    <span>100-199台</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>&yen;<em>28.50</em></span>
                                    <span>100-199台</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>&yen;<em>28.50</em></span>
                                    <span>100-199台</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>库存 1000件</span>
                        <span>发货期 3天内</span>
                        <span>所在地区 广东 广州</span>
                    </div>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>济宁市安源机械设备有限公司</p>
                    <i className="xmt"></i>
                    <div>
                        <Link>进入店铺</Link>
                        <Link>最新产品</Link>
                    </div>
                </div>
                <div>
                    <span>店内推荐</span>
                    <div>
                        <ul>
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
