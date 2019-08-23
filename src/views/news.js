import React from 'react'
import { Link } from 'react-router-dom'
import '../css/news.css'
import t17 from '../assets/temp17.jpg'
import t18 from '../assets/temp18.jpg'
export default class News extends React.Component{
    constructor(props){
        super(props);
        console.log(props.match)
    }
    render(){
        return(
            <div className="news">
                <header className="nav-bar">
                    <Link className="back" to="/discover/business"></Link>
                    <span>商情</span>
                    <div className="more"></div>
                </header>
                <p className="caption">结缘中国供应——40%的业务订单来自中国供应商</p>
                <div className="article-info">11-08<span>来源：中国供应商</span><span>作者：武迷</span><span>责任编辑：唐利文</span></div>
                <div className="illustration">
                    <img src={t17} alt=""/>
                </div>
                <div className="content">
                    <p>我们公司成立于2012年，那时候互联网经济已经崛起，像所有实体业一样，仪器仪表行业也面临着巨大的机遇和挑战，经过对市场的分析，我们领导开始组建团队，尝试在网上推广产品，开通网络销售渠道。接下来的这几年，正如大家看到的那样，互联网像一台高速前进的列车，满载各行各业开启了传奇的淘金之旅，传统销售渠道只能望洋兴叹，我们很庆幸搭上了这班车。    </p>
                    <div className="contribute">
                        <div className="inner">
                            <div className="left-block"><img src={t18} alt=""/></div>
                            <div className="right-block">
                                <p className="caption">内置泵吸式二氧化碳测定仪TD5002_CO2气体检测仪</p>
                                <span className="price"><em>&yen;</em>68.00</span>
                            </div>
                        </div>
                    </div>
                    <p>我们经营主营气体检测仪、水质分析仪，最初领导让找几个B2B网站发布产品，分别查看效果，我们找了很多网站注册，每天按时按量发布信息，在具体操作过程中，慢慢地发现了中国供应商的优势，比如后台操作简洁，无广告，文本编辑功能方便简单等，最讨喜的是他们网站可以免费发布1000条产品（其他网站大部分都是100条），发布到1000条后，流量渐渐上来了，开始有客户不断打电话和留言咨询，我们就这样成了中国供应商的忠实会员。</p>
                </div>
                <div className="pagination">
                    <p><span>上一篇</span><Link to="/news/0">第68期解读软件信息化产业政策（上）</Link></p>
                    <p><span>下一篇</span><Link to="/news/2">第69期解读软件信息化产业政策</Link></p>
                </div>
            </div>
        );
    }
}
