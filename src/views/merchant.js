import React from 'react'
import { Drawer } from 'antd-mobile'
import { Link } from 'react-router-dom'
import '../css/discover.css'
import ranking from '../assets/ranking.jpg'
import t15 from '../assets/temp15.jpg'
import t16 from '../assets/temp16.png'
export default class Merchant extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            status: false,
            editable: false,
            companies:[
                {id:1,url:t15,companyName:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',total:118953,vip:''},
                {id:2,url:t16,companyName:'北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',total:118953,vip:'xmt'},
                {id:3,url:t15,companyName:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',total:118953,vip:''},
                {id:4,url:t16,companyName:'北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',total:118953,vip:'xmt'},
                {id:5,url:t15,companyName:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',total:118953,vip:''},
                {id:6,url:t16,companyName:'北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',total:118953,vip:'xmt'}
            ],
            personal: ['家伙祖','情感','农业机械','仪器仪表','家装见','情感','机械','行业行业','健才','日用百货','我是一个字很多的行业','农业机械','母婴用品','农业机械','行业行业'],
            hot: ['家伙祖','情感','农业机械','仪器仪表','家装见','情感','机械','行业行业','健才','日用百货','我是一个字很多的行业','农业机械','母婴用品','农业机械','行业行业']
        }
        this.onOpenChange = this.onOpenChange.bind(this);
        this.onEditableChange = this.onEditableChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    onOpenChange(){
        if(this.state.open){
            this.setState({status:!this.state.status},()=>{
                this.setState({open: !this.state.open})
            });
        }else{
            this.setState({open: !this.state.open},()=>{
                this.setState({status:!this.state.status});
            });
        }
    }
    onEditableChange(){
        if(this.state.editable){
            console.log('save...')
        }
        this.setState({editable:!this.state.editable});
    }
    onRemove(idx){
        let arr = this.state.personal.filter((item,index) => {
            return idx !== index;
        });
        this.setState({personal: arr});
    }
    render(){
        return(
            <div className={`merchant${this.state.open ? ' lock':''}`}>
                <div className="classify">
                    <ul>
                        <li className="current">全部</li>
                        <li>数码家电</li>
                        <li>通讯产品</li>
                        <li>电子</li>
                        <li>仪器器</li>
                    </ul>
                    <span className="add-btn" onClick={this.onOpenChange}></span>
                </div>
                <Link to="/ranking"><img className="focus-img" src={ranking} alt=""/></Link>
                <div className="companies">
                    <ul>
                        {this.state.companies.map((data,idx)=>(<li key={idx}>
                            <div className="left">
                                <img src={data.url} alt=""/>
                            </div>
                            <div className="right">
                                <div>
                                    <p className={`caption ${data.vip}`}>{data.companyName}</p>
                                    <span className="main-business">主营：{data.business}</span>
                                </div>
                                <div className="line"><span>{data.addr}</span><span>{data.total}件产品</span></div>
                            </div>
                        </li>))}
                    </ul>
                </div>
                {
                    this.state.open ? <Drawer
                        className="industry-drawer"
                        position="bottom"
                        sidebar={this.renderDrawer()}
                        open={this.state.status}
                        onOpenChange={this.onOpenChange}>
                        &nbsp;
                    </Drawer> : null
                }
            </div>
        );
    }
    renderDrawer(){
        return (
            <div className="panel">
                <span className="close-btn" onClick={this.onOpenChange}></span>
                <div className="line">
                    <span><em>我的行业点</em>击切换行业</span>
                    <span className="btn" onClick={this.onEditableChange}>{this.state.editable ? '保存' : '编辑'}</span>
                </div>
                <div className={`group${this.state.editable?' editable':''}`}>
                    {
                        this.state.personal.map((item,idx)=>(<div className="item" key={idx}>{item}<i onClick={()=>this.onRemove(idx)}></i></div>))
                    }
                </div>
                <div className="line">
                    <span><em>热门行业</em>点击添加行业</span>
                </div>
                <div className="group hot">
                    {
                        this.state.hot.map((item,idx)=>(<div className="item" key={idx}>{item}</div>))
                    }
                </div>
            </div>
        )
    }
}
