import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import tempImg from '../assets/temp10.jpg';
import '../css/category.css'
export default class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories: [{key:'jx0',title:'机械0',active:true},{key:'jx1',title:'机械1'},{key:'jx2',title:'机械2'},{key:'jx4',title:'机械4'},{key:'jx5',title:'机械5'},{key:'jx6',title:'机械6'},{key:'jx7',title:'机械7'},{key:'jx8',title:'机械8'},{key:'jx9',title:'机械9'},{key:'jx10',title:'机械10'}],
            allCategories:[
                ['机械', '电工电气', '机械', '电工电气', '家装建材', '数码工', '化工', '个人防护', '数码', '数码', '能源', '电工电气', '家装建材', '包装', '包装', '个人防护', '办公文教', '办公文教', '办公文教', '化工'],
                ['机械1','机械1','机械1','机械1','机械1','机械1','机械1','机械1','机械1','机械1','机械1'],
                ['机械2','机械2','机械2','机械2','机械2','机械2','机械2','机械2','机械2','机械2','机械2']],
            subCategories:['机械', '电工电气', '机械', '电工电气', '家装建材', '数码工', '化工', '个人防护', '数码', '数码', '能源', '电工电气', '家装建材', '包装', '包装', '个人防护', '办公文教', '办公文教', '办公文教', '化工']
        }
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }
    onCategoryChange(index){
        if(this.state.categories[index].active){
            return;
        }
        this.setState(this.state.categories.map((item,idx)=>{
            if(item.active){
                item.active = false;
            }
            if(index === idx){
                item.active = true;
            }
            return item;
        }))
        this.setState({subCategories:this.state.allCategories[index] || ['暂无']})
    }
    render(){
        return(
            <div className="app">
                <div className="category">
                    <div className="search-box">
                        <input placeholder="输入关键词，开始搜索"/>
                    </div>
                    <div className="wrapper">
                        <div className="left">
                            {this.state.categories.map((item,index)=>(<div key={item.key} onClick={()=>this.onCategoryChange(index)} className={`item ${item.key} ${item.active? 'current' :''}`}>{item.title}</div>))}
                        </div>
                        <div className="right">
                            <img src={tempImg} alt=""/>
                            <div className="sub-category">
                                {this.state.subCategories.map((item,index)=>(<Link key={index} to="">{item}</Link>))}
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <NavLink exact to="/" className="home" activeClassName="current">首页</NavLink>
                    <NavLink to="/category" className="category" activeClassName="current">分类</NavLink>
                    <NavLink to="/discover" className="discover" activeClassName="current">发现</NavLink>
                    <NavLink to="/my" className="my" activeClassName="current">个人</NavLink>
                </footer>
            </div>
        );
    }
}
