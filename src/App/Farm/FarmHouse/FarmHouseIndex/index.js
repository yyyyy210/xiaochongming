import { PropTypes } from 'react'
// import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { Icon, Carousel, WhiteSpace, List } from 'antd-mobile';
import HouseInfo from './HouseInfo'
import { ReviewList } from 'Components/Review';

const Item = List.Item;

import './style.less'

function FarmHouse({ loading, dispatch, datas}) {
	const { data } = datas;
	const hs = data.house_service || {};

	return (
		<div className="FarmHouse">
			<div className="FarmHouseBanner">
				<span className="z">一层</span>
				<Carousel className="banner" autoplay={false} infinite selectedIndex={0} swipeSpeed={35}>
					{
						data.covers && data.covers.map((t,index)=>{
							return <img key={index} src={t} style={{ height: 300 }} />
						})
					}
				</Carousel>
			</div>
			<div className="houseInfo">
				<span className="houseSaleName">满7天8折；满30天7折优惠</span>
				<h3>{data.name}</h3>
				<h6>{data.subname}</h6>
				<var>$ {data.price}</var>
				<div className="houseMaster">
					<span className="houseType">整套房子</span>
					<span className="masterName">房东：{data.owner}</span>
					<img src={data.owner_avatar} />
				</div>
				<div className="scrollX">
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.place}位</div></div>
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.room}室</div></div>
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.hall}厅</div></div>
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.bathroom}卫</div></div>
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.kitchen}厨</div></div>
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.balcony}阳</div></div>
					<div className="item"><div className="itemco"><img src="images/banner.jpg" /></div><div>{data.bed}床{data.bed_info}</div></div>
				</div>
			</div>
			<WhiteSpace />
			<ReviewList />
			<WhiteSpace />
			<div className="houseSaleInfo">
				<List renderHeader={() => '房源介绍'} className="my-list">
					<Item wrap>
						<p>{data.describe}</p>
					</Item>
				</List>
			</div>
			<WhiteSpace />
			<div className="houseSaleInfo">
				<List renderHeader={() => '服务'} className="my-list">
					<Item wrap>
						{ hs && <HouseInfo hservice={hs} />}
						<div className="houseInput">
							<span>入住<br />{data.checkin_time}</span>
							<span>退房<br />{data.checkout_time}</span>
						</div>
					</Item>
				</List>
			</div>
			<WhiteSpace />
			<div className="houseSaleAsk">
				<List renderHeader={() => '入住须知'} className="my-list">
					<Item extra={data.reception_time}>接待时间</Item>
					<Item extra={data.deposit}>押金</Item>
					<Item extra={data.additional_costs}>额外费用</Item>
					<Item extra={data.sheets_replace}>被单更换</Item>
					<Item extra={data.refund}>退款政策</Item>
					<Item extra={data.checkin_time}>入住时间</Item>
					<Item extra={data.checkout_time}>退房时间</Item>
				</List>
			</div>
		</div>
	);
}

//参类型验证
FarmHouse.propTypes = {
	dispatch: PropTypes.func,
	loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state, loading) {
	return {
		loading: state.loading.models.FarmHouse,
		datas: state.FarmHouse
	};
}

export default connect(mapStateToProps)(FarmHouse)