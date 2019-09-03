import React from 'react'
import SearchBox from './common/searchbox.js'
import '../css/companylist.css'
import t15 from '../assets/temp15.jpg'
import t16 from '../assets/temp16.png'

export default class CompanyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword:this.props.history.location.state.kw,
            companies:[
                {id:1,url:t15,title:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:''},
                {id:2,url:t16,title:'北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:'xmt'},
                {id:3,url:t15,title:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:''},
                {id:4,url:t16,title:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:''},
                {id:5,url:t15,title:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:''},
                {id:6,url:t16,title:'北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:'xmt'},
                {id:7,url:t15,title:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:''},
                {id:8,url:t16,title:'北京情爱安东尼嘎啦有限公司',business:'钢材  设备机床  行车仪床  钢材贯通...',addr:'河北 廊坊',amount:'118953',vip:''}
            ]
        }
        this.onKeywordChange = this.onKeywordChange.bind(this);
    }
    onKeywordChange(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div className="company-list">
                <SearchBox
                    keyword={this.state.keyword}
                    onKeywordChange={this.onKeywordChange}
                    onBack={()=>{this.props.history.goBack()}}>
                    <span className="filter">筛选</span>
                </SearchBox>
                <div className="companies">
                    <ul>
                        {
                            this.state.companies.map((item,idx)=>(
                                <li key={idx}>
                                    <div className="left">
                                        <img src={item.url} alt=""/>
                                    </div>
                                    <div className="right">
                                        <div>
                                            <p className={`caption ${item.vip}`}>{item.title}</p>
                                            <span className="main-business">主营：{item.business}</span>
                                        </div>
                                        <div className="line"><span>{item.addr}</span><span>{item.amount}件产品</span></div>
                                    </div>
                                </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
