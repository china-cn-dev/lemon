import React from 'react'
import { Link, NavLink,Route,Switch } from 'react-router-dom'
import {Drawer,Popover} from 'antd-mobile'
import '../css/productdetail.css'
import t25 from '../assets/temp25.jpg'
import t26 from '../assets/temp26.jpg'
import home from '../assets/home_2.png'
import my from '../assets/my_2.png'
const Item = Popover.Item;
export default class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params.id)
        this.state = {
            pid:this.props.match.params.id,
            open: false,
            visible: false,
            attrs:[
                { attrName: '产地', attrValue: '广东' },
                { attrName: '材质工艺', attrValue: '铝' },
                { attrName: '品牌', attrValue: '奇志浩天' },
                { attrName: '产地', attrValue: '广东' },
                { attrName: '材质工艺', attrValue: '铝' },
                { attrName: '品牌产地', attrValue: '奇志浩天' },
                { attrName: '材质工艺', attrValue: '广东' },
                { attrName: '品牌产地', attrValue: '铝奇志浩天' },
                { attrName: '材质工艺', attrValue: '广东铝' },
                { attrName: '品牌', attrValue: '奇志浩天' }
            ]
        }
        this.onOpenChange = this.onOpenChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onVisibleChange = this.onVisibleChange.bind(this);
    }
    onOpenChange(){
        this.setState({open:!this.state.open});
    }
    onSelect(opt){
        this.setState({visible:false});
        this.props.history.push(opt.props.value);
    }
    onVisibleChange(visible){
        this.setState({visible});
    }
    render(){
        return(
            <Drawer className="product-detail-drawer" position="bottom"
                open={this.state.open}
                sidebar={this.sidebar()}
                onOpenChange={this.onOpenChange}>
                <div className="product-detail">
                    <header className="nav-bar">
                        <span className="back" onClick={()=>{this.props.history.goBack()}}></span>
                        <NavLink exact to={`/product/${this.state.pid}/details`}>产品</NavLink>
                        <NavLink to={`/product/${this.state.pid}/details/more`}>详情</NavLink>
                        <Popover mask
                            placement="bottomRight"
                            overlay={this.overlay()}
                            visible={this.state.visible}
                            onSelect={this.onSelect}
                            onVisibleChange={this.onVisibleChange}>
                            <span className="more"></span>
                        </Popover>
                    </header>
                    <Switch>
                        <Route exact path="/product/:id/details" render={()=>(this.renderDetails())}></Route>
                        <Route path="/product/:id/details/more" render={()=>(<div>more</div>)}></Route>
                    </Switch>
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
            </Drawer>
        )
    }
    renderDetails(){
        return (
            <div className="main-content">
                <p className="caption">产品属性<i className="icon-more" onClick={this.onOpenChange}></i></p>
                <div className="briefs">
                    <ul>
                        <li><label>产地</label><span>广东</span></li>
                        <li><label>材质工艺</label><span>铝</span></li>
                        <li><label>品牌</label><span>奇志浩天</span></li>
                    </ul>
                </div>
                <div className="intro">
                    <img src={t25} alt=""/>
                    <p>强力汽车专用PE泡棉双面胶 3M防水泡沫胶贴 厂家鑫瑞宝深圳市鑫瑞宝光电有限公司专业生产胶粘制品、<br/>冲型模切厂家，可来图来样加工，且免费寄样，<br/>专业联系方式：汪先生 181 2392 7398<br/>强力汽车专用PE泡棉双面胶 3M防水泡沫胶贴 <br/>厂家鑫瑞宝深圳市鑫瑞宝光电有限公司专业生产胶粘制品、<br/>冲型模切厂家，可来图来样加工，且免费寄样，<br/>专业联系方式：汪先生 181 2392 7398<br/>厂家鑫瑞宝深圳市鑫瑞宝光电有限公司专业生产胶粘制品、<br/>冲型模切厂家，可来图来样加工，且免费寄样，</p>
                    <img src={t26} alt=""/>
                </div>
            </div>
        );
    }
    sidebar(){
        return(
            <div className="detail-attrs">
                <p className="caption">产品属性<i className="icon-more"></i></p>
                <ul>
                    {
                        this.state.attrs.map((attr,idx)=>(<li key={idx}><label>{attr.attrName}</label><span>{attr.attrValue}</span></li>))
                    }
                </ul>
                <button onClick={this.onOpenChange}>关闭</button>
            </div>
        );
    }
    overlay(){
        return(
            <div className="product-nav-pop">
                <Item value="/" icon={(<img src={home} alt=""/>)}>首页</Item>
                <Item value="/my" icon={(<img src={my} alt=""/>)}>我的</Item>
            </div>
        );
    }
}
