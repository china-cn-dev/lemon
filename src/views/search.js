import React from 'react'
import { Link } from 'react-router-dom'
import '../css/search.css'
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchType: 'chanpin',
            types:[{key:'chanpin',title:'产品'},{key:'qiugou',title:'求购'},{key:'gongsi',title:'公司'}]
        }
        this.changeSearchType = this.changeSearchType.bind(this);
    }
    changeSearchType(e){
        console.log(e)
    }
    render(){
        return(
            <div className="search">
                <header className="nav-bar">
                    <Link className="back" to="/"></Link>
                    <ul>
                        {
                            this.state.types.map(item=>(
                                <li key={item.key} className={`${item.key}${item.key === this.state.searchType ? ' active':''}`} onClick={()=>this.setState({searchType:item.key})}>{item.title}</li>
                            ))
                        }
                    </ul>
                </header>
                <div className="search-box">
                    <input placeholder="输入关键词，开始搜索"/>
                </div>
                <div className="hot">
                    <p>热门搜索</p>
                    <div className="search-wrap">
                        <Link to="">家家伙</Link>
                        <Link to="">家家伙</Link>
                        <Link to="">拖拉机上山</Link>
                        <Link to="">不贵质量好不要钱的产品</Link>
                        <Link to="">家家伙</Link>
                        <Link to="">家家伙</Link>
                    </div>
                </div>
                <div className="lately">
                    <p>最近搜索<span className="sweep"></span></p>
                    <div className="search-wrap">
                        <Link to="">家家伙</Link>
                        <Link to="">家家伙</Link>
                        <Link to="">不贵质量好不要钱的产品</Link>
                        <Link to="">拖拉机上山</Link>
                        <Link to="">家家伙</Link>
                        <Link to="">家家伙</Link>
                    </div>
                </div>
            </div>
        );
    }
}
