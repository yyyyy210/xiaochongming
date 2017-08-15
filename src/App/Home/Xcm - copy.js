import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'

import { Carousel, Tabs, Flex, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;
import './style.less';

function Xcm({ location }) {
	function callback(key) {
		console.log('onChange', key);
	}

	function handleTabClick(key) {
		console.log('onTabClick', key);
	}

	const PlaceHolder = props => (
		<div
			style={{backgroundColor: '#ebebef', color: '#bbb', textAlign: 'center', height: '0.6rem', lineHeight: '0.6rem', width: '100%'}} {...props}
			>Item
		</div>
	)



	
	const options = {eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false}

	function onScrollStart() {
    	console.log("iScroll starts scrolling")
  	}

	return (
		<div>
			<Carousel className="banner" autoplay={false} infinite selectedIndex={0} swipeSpeed={35}>
				<img src="images/banner.jpg"/>
				<img src="images/banner.jpg"/>
				<img src="images/banner.jpg"/>
			</Carousel>
			<WhiteSpace />
			<Tabs defaultActiveKey="1" onChange={callback} pageSize={5} onTabClick={handleTabClick} animated={false} swipeable={false}>
				<TabPane tab='测试1' key={1}>
					<div className="scroller">
						<ReactIScroll iScroll={iScroll} options={options} onScrollStart={onScrollStart}>
							<div className="child">
								<ul>
									<li>Pretty cell 1</li>
									<li>Pretty cell 2</li>
									<li>Pretty cell 3</li>
									<li>Pretty cell 4</li>
									<li>Pretty cell 5</li>
									<li>Pretty cell 6</li>
									<li>Pretty cell 7</li>
									<li>Pretty cell 8</li>
									<li>Pretty cell 9</li>
									<li>Pretty cell 10</li>
									<li>Pretty cell 11</li>
									<li>Pretty cell 12</li>
									<li>Pretty cell 13</li>
									<li>Pretty cell 14</li>
									<li>Pretty cell 15</li>
									<li>Pretty cell 16</li>
									<li>Pretty cell 17</li>
									<li>Pretty cell 18</li>
									<li>Pretty cell 19</li>
									<li>Pretty cell 20</li>
								</ul>
							</div>
						</ReactIScroll>
					</div>
					<WhiteSpace />
					<div className="scroller">
						<ReactIScroll iScroll={iScroll} options={options} onScrollStart={onScrollStart}>
							<div className="child">
								<ul>
									<li>Pretty cell 1</li>
									<li>Pretty cell 2</li>
									<li>Pretty cell 3</li>
									<li>Pretty cell 4</li>
									<li>Pretty cell 5</li>
									<li>Pretty cell 6</li>
									<li>Pretty cell 7</li>
									<li>Pretty cell 8</li>
									<li>Pretty cell 9</li>
									<li>Pretty cell 10</li>
									<li>Pretty cell 11</li>
									<li>Pretty cell 12</li>
									<li>Pretty cell 13</li>
									<li>Pretty cell 14</li>
									<li>Pretty cell 15</li>
									<li>Pretty cell 16</li>
									<li>Pretty cell 17</li>
									<li>Pretty cell 18</li>
									<li>Pretty cell 19</li>
									<li>Pretty cell 20</li>
								</ul>
							</div>
						</ReactIScroll>
					</div>
				</TabPane>
				<TabPane tab='测试2' key={2}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>测试2</div>
				</TabPane>
			</Tabs>
			<WhiteSpace />
			<div className="am-action-sheet-share-list">
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">发送给朋友</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">新浪微博</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">生活圈</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">微信好友</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">QQ</div></div>
			    <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">发送给朋友</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">新浪微博</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">生活圈</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">微信好友</div></div>
			  <div className="am-action-sheet-share-list-item" role="button">
			    <div className="am-action-sheet-share-list-item-icon">
			      <img src="images/banner.jpg" alt="icon" /></div>
			    <div className="am-action-sheet-share-list-item-title">QQ</div></div>
			</div>
			<div>
				<span>拉拉</span>
				<Flex>
					<Flex.Item><PlaceHolder /></Flex.Item>
					<Flex.Item><PlaceHolder /></Flex.Item>
					<Flex.Item><PlaceHolder /></Flex.Item>
				</Flex>
			</div>
		</div>
	);
}

export default Xcm;
