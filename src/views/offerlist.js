import React from 'react'
import SearchBox from './common/searchbox.js'
import '../css/offerlist.css'
export default class OfferList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword:this.props.history.location.state.kw,
            offerList:[
                {id:1,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:2,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:3,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:4,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:5,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:6,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:7,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'},
                {id:8,title:'求购大功率超高速点击',addr:'河北  廊坊',date:'2017-12-16'}
            ]
        }
        this.onKeywordChange = this.onKeywordChange.bind(this);
    }
    onKeywordChange(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div className="offer-list">
                <SearchBox
                    keyword={this.state.keyword}
                    onKeywordChange={this.onKeywordChange}
                    onBack={()=>{this.props.history.goBack()}}>
                    <span className="filter">筛选</span>
                </SearchBox>
                <div className="offer-group">
                    <ul>
                        {this.state.offerList.map((item,idx)=>(
                            <li key={idx}>
                                <p className="caption">{item.title}</p>
                                <div className="line">
                                    <span>{item.addr}</span>
                                    <span>{item.date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
