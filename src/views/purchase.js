import React from 'react'
import { Link } from 'react-router-dom'
import '../css/discover.css'

export default class Purchase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
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
    componentDidMount(){
        fetch('/api/purchases').then(resp=>resp.json()).then(data=>{
            if(data.code === 200){
                this.setState({ list:data.data });
            }
        }).catch(e=>{console.log(e)})
    }
}
