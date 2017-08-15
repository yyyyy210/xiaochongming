import { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { Carousel, Flex, WhiteSpace } from 'antd-mobile';
import Tabs from 'Components/Tabs'
import {ReviewStar} from 'Components/Review'

import './style.less'

function FarmIndex({loading,dispatch}) {
	function jump(id) {
		dispatch(routerRedux.push(`/farm/home/${id}`))
	}

	return (
		<div className="farmindex">
			<div className="farmindexTitle">
				<span>啦啦啦啦啦</span>
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
			<Tabs lineColor="#f00" fontColor="#f00">
				<div name="标题1">
					<ul>
						<li onClick={()=>jump(1)}>
							<div className="farmBox">
								<img style={{ height: '1.28rem', marginRight: '0.3rem' }} src='images/banner.jpg' alt="icon" />
								<div className="row-text">
									<span>就怕加哦发顺丰</span>
									<ReviewStar />
									<p>发射、点发射点、防辐射</p>
									<var>¥<span>35</span></var>
								</div>
							</div>
							<div className="farmTag"><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span></div>
							<div className="farmTag"><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span></div>
						</li>
						<li onClick={()=>jump(2)}>
							<div className="farmBox">
								<img style={{ height: '1.28rem', marginRight: '0.3rem' }} src='images/banner.jpg' alt="icon" />
								<div className="row-text">
									<span>就怕加哦发顺丰</span>
									<ReviewStar />
									<p>发射、点发射点、防辐射</p>
									<var>¥<span>35</span></var>
								</div>
							</div>
							<div className="farmTag"><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span></div>
							<div className="farmTag"><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span></div>
						</li>
						<li onClick={()=>jump(3)}>
							<div className="farmBox">
								<img style={{ height: '1.28rem', marginRight: '0.3rem' }} src='images/banner.jpg' alt="icon" />
								<div className="row-text">
									<span>就怕加哦发顺丰</span>
									<ReviewStar />
									<p>发射、点发射点、防辐射</p>
									<var>¥<span>35</span></var>
								</div>
							</div>
							<div className="farmTag"><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span></div>
							<div className="farmTag"><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span><span>哈1</span></div>
						</li>
					</ul>
				</div>
				<div name="标题2">
					标题2
				</div>
				<div name="标题3">
					标题3
				</div>
			</Tabs>
		</div>
	);
}

//参类型验证
FarmIndex.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state,loading) {
    return {

    };
}

export default connect(mapStateToProps)(FarmIndex)