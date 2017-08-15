import { Link } from 'dva/router'
import { Carousel, Flex, WhiteSpace } from 'antd-mobile';
import Tabs from 'Components/Tabs'
import './style.less';

function Xcm({ location }) {
	function callback(key) {
		console.log('onChange', key);
	}

	function handleTabClick(key) {
		console.log('onTabClick', key);
	}
	
	return (
		<div>
			<Carousel className="banner" autoplay={false} infinite selectedIndex={0} swipeSpeed={35}>
				<img src="images/banner.jpg" style={{ height: 300 }} />
				<img src="images/banner.jpg" style={{ height: 300 }} />
				<img src="images/banner.jpg" style={{ height: 300 }} />
			</Carousel>
			<WhiteSpace />
			<Tabs lineColor="#108ee9" fontColor="#108ee9">
				<div name="测试1">
					<div className="scrollX">
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
						<div className="item" role="button"><div className="itemco"><img src="images/banner.jpg"/></div></div>
					</div>
				</div>
				<div name="测试2">
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>测试2</div>
				</div>
				<div name="测试3">
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>测试3</div>
				</div>
			</Tabs>
			<WhiteSpace />
			<div className="itemLink">
				<span>拉拉</span>
				<Flex>
					<Flex.Item><Link to='farm'><img src="images/banner.jpg" /></Link></Flex.Item>
					<Flex.Item><Link to='foot'><img src="images/banner.jpg" /></Link></Flex.Item>
					<Flex.Item><Link to='gather'><img src="images/banner.jpg" /></Link></Flex.Item>
				</Flex>
			</div>
		</div>
	);
}

export default Xcm;
