import React from 'react'
import {Link} from 'react-router-dom'
import { Drawer, DatePicker, List, InputItem} from 'antd-mobile'
import '../css/buy.css'
import t19 from '../assets/temp19.jpg'
export default class PurchaseDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            products:[
                {id:1,url:t19,title:'台湾DR-350B气模枪配件',price:'32元/台',amount:'1000台',remark:'贵的不要 贵的不要 贵的不要'},
                {id:2,url:t19,title:'台湾DR-350B气模枪配件',price:'32元/台',amount:'1000台'}
            ],
            startDate: new Date()
        }
        this.onOpenChange = this.onOpenChange.bind(this);
    }
    onOpenChange(){
        this.setState({open:!this.state.open});
    }
    render(){
        const sidebar = this.renderOfferSheet();
        return(
            <div className="buy">
                <Drawer className="offer-sheet-drawer"
                    position="bottom"
                    open={this.state.open}
                    sidebar={sidebar}
                    onOpenChange={this.onOpenChange}>
                    <header className="nav-bar">
                        <Link className="back" to="/discover"></Link>
                        <span>采购详情</span>
                    </header>
                    <div className="buy-info">
                        <p className="caption">采购大功率超高速电机</p>
                        <span className="publish-date">发布日期 2017-12-16</span>
                        <div className="expire">距离报价结束 还剩 <strong>7</strong> 天</div>
                    </div>
                    <div className="goods">
                        <ul>
                        {
                            this.state.products.map(item=>(
                                <li key={item.id}>
                                    <div className="thumb"><img src={item.url} alt=""/></div>
                                    <div className="info">
                                        <p className="title">{item.title}</p>
                                        <p><label>价格</label>：<em className="text-danger">{item.price}</em></p>
                                        <p><label>采购量</label>：{item.amount}</p>
                                        {
                                            item.remark ? (<p><label>备注</label>：{item.remark}</p>) : null
                                        }
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="other-demand">
                        <p>收货地：浙江 绍兴</p>
                        <p>采购类型：全新</p>
                        <p>发票要求：不需要发票</p>
                        <p>补充说明：05年1.8花冠前氧传感器</p>
                    </div>
                    <div className="make-offer"><button onClick={this.onOpenChange}>马上报价</button></div>
                </Drawer>
            </div>
        )
    }
    renderOfferSheet(){
        return (
            <div className="offer-sheet">
                <span className="close-btn" onClick={this.onOpenChange}></span>
                <p className="caption">填写报价单</p>
                <div className="goods">
                    <ul>
                        <li>
                            <div className="thumb"><img src={t19} alt=""/></div>
                            <div className="info">
                                <p className="title">台湾DR-350B气模枪配件</p>
                                <p>采购量：1000台</p>
                                <div className="">
                                    <div>单价<input type="text"/>元</div>
                                    <div>单位<input type="text"/></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="thumb"><img src={t19} alt=""/></div>
                            <div className="info">
                                <p className="title">台湾DR-350B气模枪配件</p>
                                <p>采购量：1000台</p>
                                <div>
                                    <div>单价<input type="text"/>元</div>
                                    <div>单位<input type="text"/></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tags"></div>
                <div className="group">
                    <div className="line">
                        <label>报价有效期</label>
                        <div>
                            <input type="hidden"/>
                            <DatePicker mode="date" value={this.state.startDate}>
                                <List.Item>click</List.Item>
                            </DatePicker>
                        </div>
                    </div>
                    <div className="line">
                        <label>交货期</label>
                        <div><input type="text"/></div>天
                    </div>
                    <div className="line">
                        <label>补充说明</label>
                        <div><input type="text"/></div>天
                    </div>
                    <div className="line">
                        <label>上传图片</label>
                        <div><input type="file"/></div>天
                    </div>
                </div>
                <div>
                    <div>我的联系方式</div>
                    <div>
                        <p>老蒋科贸(北京)有限责任公司</p>
                        <p>姓名：李萧</p>
                        <p>电话：13636363636</p>
                    </div>
                </div>
            </div>
        )
    }
}
