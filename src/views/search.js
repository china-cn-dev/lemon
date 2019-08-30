import React from 'react'
import { Link } from 'react-router-dom'
import '../css/search.css'
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword:'',
            searchType: 'chanpin',
            types:[{key:'chanpin',title:'产品'},{key:'qiugou',title:'求购'},{key:'gongsi',title:'公司'}]
        }
        this.changeSearchType = this.changeSearchType.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onKeywordChange = this.onKeywordChange.bind(this);
    }
    changeSearchType(e){
        console.log(e)
    }
    onSearch(){
        console.log(this.state.keyword)
        console.log(this.props.history.push({pathname:'agora',state:{kw:this.state.keyword}}))
    }
    onKeywordChange(e){
        this.setState({
            keyword:e.target.value
        })
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
                    <input value={this.state.keyword} placeholder="输入关键词，开始搜索" onChange={this.onKeywordChange}/>
                    <button className="search-btn" onClick={this.onSearch}>搜索</button>
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
