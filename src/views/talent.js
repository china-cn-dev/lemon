import React from 'react'
import t21 from '../assets/temp21.jpg'
export default class Talent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, logo: t21, companyName: '湖北世界人最多有限公司', vip: 'xmt', business: '钢材  设备机床  行车车车车仪床  钢材贯通  设备机床  行车仪床  钢材贯通', addr: '河北  廊坊', total: 118953 },
                { id: 2, logo: t21, companyName: '湖北世界人最多有限公司', vip: 'xmt', business: '钢材  设备机床  行车车车车仪床  钢材贯通  设备机床  行车仪床  钢材贯通', addr: '河北  廊坊', total: 118953 },
                { id: 3, logo: t21, companyName: '湖北世界人最多有限公司', vip: 'xmt', business: '钢材  设备机床  行车车车车仪床  钢材贯通  设备机床  行车仪床  钢材贯通', addr: '河北  廊坊', total: 118953 },
                { id: 4, logo: t21, companyName: '湖北世界人最多有限公司', vip: 'xmt', business: '钢材  设备机床  行车车车车仪床  钢材贯通  设备机床  行车仪床  钢材贯通', addr: '河北  廊坊', total: 118953 },
                { id: 5, logo: t21, companyName: '湖北世界人最多有限公司', vip: 'xmt', business: '钢材  设备机床  行车车车车仪床  钢材贯通  设备机床  行车仪床  钢材贯通', addr: '河北  廊坊', total: 118953 },
                { id: 6, logo: t21, companyName: '湖北世界人最多有限公司', vip: 'xmt', business: '钢材  设备机床  行车车车车仪床  钢材贯通  设备机床  行车仪床  钢材贯通', addr: '河北  廊坊', total: 118953 }
            ]
        }
    }
    render() {
        return (
            <div className="talents">
                <ul>
                    {
                        this.state.data.map((item,index)=>{
                            let elem;
                            if(index < 3){
                                elem = <span className={'top-' + index}></span>
                            }else{
                                elem = <span className='usual'>{index + 1}</span>;
                            }
                            return (<li key={item.id}>
                                {elem}
                                <img className="logo" src={item.logo} alt=""/>
                                <div>
                                    <p className={`company-name ${item.vip}`}>{item.companyName}</p>
                                    <p className="business">主营：{item.business}</p>
                                    <p className="line"><span>{item.addr}</span><span>{item.total}件产品</span></p>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
