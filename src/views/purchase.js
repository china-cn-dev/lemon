import React from 'react'
import { Link } from 'react-router-dom'
import '../css/discover.css'

export default class Purchase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {id:11,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:12,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:13,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:14,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:15,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:16,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:17,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
                {id:18,title:'采购大功率超高速点击',industry:'油泵/油嘴',quote:16251,date:'2017-12-16'},
            ]
        }
    }
    render(){
        return(
            <div className="purchase-list">
                <ul>
                    {
                        this.state.list.map(item=>(
                            <li key={item.id}>
                                <p className="caption"><Link to={`/buy/${item.id}`}>{item.title}</Link></p>
                                <span className="industry">所属行业  {item.industry}</span>
                                <div className="quote"><span>已有 {item.quote} 报价</span><span>报价截止日期 {item.date}</span></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
