import React from 'react'
export default class SearchBox extends React.Component{
    render(){
        return(
            <header className="nav-bar">
                <span onClick={this.props.onBack} className="back"></span>
                <div className="search-box">
                    <input placeholder="输入关键词，开始搜索" value={this.props.keyword} onChange={this.props.onKeywordChange}/>
                </div>
                {this.props.children}
            </header>
            )
    }
}
