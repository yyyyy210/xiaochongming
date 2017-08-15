import { Flex } from 'antd-mobile';
import ReviewStar from './ReviewStar';
import './style.less'

function ReviewList() {
	return (
		<div className="reviewList">
			<div className="reviewTitle">评论</div>
			<ul>
				<li>
					<div className="reviewInfo">
						<img src='images/banner.jpg'/>
						<div className="reviewText">
							<span>就哦泼妇似的</span>
							<ReviewStar />
							<time>2013-01-01</time>
						</div>
					</div>
					<p>发射点犯得上 发射点发生发发 发射点发生发发射点犯得上 发射点发生发发 发射点发生发发射点犯得上 发射点发生发发 发射点发生发</p>
					<Flex>
						<Flex.Item><img src="images/banner.jpg" /></Flex.Item>
						<Flex.Item><img src="images/banner.jpg" /></Flex.Item>
						<Flex.Item><img src="images/banner.jpg" /></Flex.Item>
					</Flex>
				</li>
				<li>
					<div className="reviewInfo">
						<img src='images/banner.jpg'/>
						<div className="reviewText">
							<span>就哦泼妇似的</span>
							<ReviewStar />
							<time>2013-01-01</time>
						</div>
					</div>
					<p>发射点犯得上 发射点发生发发 发射点发生发发射点犯得上 发射点发生发发 发射点发生发发射点犯得上 发射点发生发发 发射点发生发</p>
				</li>
				<li>
					<div className="reviewInfo">
						<img src='images/banner.jpg'/>
						<div className="reviewText">
							<span>就哦泼妇似的</span>
							<ReviewStar />
							<time>2013-01-01</time>
						</div>
					</div>
					<p>发射点犯得上 发射点发生发发 发射点发生发发射点犯得上 发射点发生发发 发射点发生发发射点犯得上 发射点发生发发 发射点发生发</p>
					<Flex>
						<Flex.Item><img src="images/banner.jpg" /></Flex.Item>
						<Flex.Item><img src="images/banner.jpg" /></Flex.Item>
						<Flex.Item><img src="images/banner.jpg" /></Flex.Item>
					</Flex>
				</li>
			</ul>
		</div>
	);
}

export default ReviewList;
