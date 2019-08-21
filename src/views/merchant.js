import React from 'react'
import '../css/discover.css'
import ranking from '../assets/ranking.jpg'
import t15 from '../assets/temp15.jpg'
import t16 from '../assets/temp16.png'
export default class Merchant extends React.Component{
    render(){
        return(
            <div className="merchant">
                <div className="classify">
                    <ul>
                        <li className="current">全部</li>
                        <li>数码家电</li>
                        <li>通讯产品</li>
                        <li>电子</li>
                        <li>仪器器</li>
                    </ul>
                    <span className="add-btn"></span>
                </div>
                <img className="ranking" src={ranking} alt=""/>
                <div className="companies">
                    <ul>
                        <li>
                            <div className="left">
                                <img src={t15} alt=""/>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="caption">北京情爱安东尼嘎啦有限公司</p>
                                    <span className="main-business">主营：钢材  设备机床  行车仪床  钢材贯通...</span>
                                </div>
                                <div className="line"><span>河北 廊坊</span><span>118953件产品</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={t16} alt=""/>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="caption xmt">北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司</p>
                                    <span className="main-business">主营：钢材  设备机床  行车仪床  钢材贯通...</span>
                                </div>
                                <div className="line"><span>河北 廊坊</span><span>118953件产品</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={t15} alt=""/>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="caption">北京情爱安东尼嘎啦有限公司</p>
                                    <span className="main-business">主营：钢材  设备机床  行车仪床  钢材贯通...</span>
                                </div>
                                <div className="line"><span>河北 廊坊</span><span>118953件产品</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <img src={t16} alt=""/>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="caption xmt">北京情安东爱尼嘎爱尼嘎爱嘎啦有限公司</p>
                                    <span className="main-business">主营：钢材  设备机床  行车仪床  钢材贯通...</span>
                                </div>
                                <div className="line"><span>河北 廊坊</span><span>118953件产品</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
