import { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { WhiteSpace, List } from 'antd-mobile';
import {ReviewList,ReviewStar} from 'Components/Review';
const Item = List.Item;

function FarmView({loading, dispatch , datas}) {
	const { restaurant } = datas;
	
	function jump(id) {
		dispatch(routerRedux.push(`/farm/dishPackage/${id}`))
	}

	return (
		<div className="farmview">
			<div>
				<div className="farmBox">
					<img src={restaurant.cover} />
					<div className="row-text">
						<span>{restaurant.name}</span>
						<ReviewStar />
						<p>{restaurant.subname}</p>
						<var>¥<span>{restaurant.price_per}</span></var>
					</div>
				</div>
				<address>{restaurant.address}</address>
			</div>
			<ReviewList />
			<WhiteSpace />
			<List renderHeader={() => '优惠套餐'}>
				{
					restaurant.dish_package
					&&
					restaurant.dish_package.map((t, index)=>{
						return (
							<Item key={index} thumb={t.covers[0]} onClick={()=>jump(t.id)}>
								<div>
									<h5>{t.name}</h5>
									<var>${t.price}<span>${t.orig_price}</span></var>
								</div>
								<div>已售{t.sale_total} ></div>
							</Item>
						)
					})
				}
			</List>
			<WhiteSpace />
			<List renderHeader={() => `推荐菜`}>
				{
					restaurant.dishes
					&&
					restaurant.dishes.map((t, index)=>{
						return (
							<Item key={index} thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"><span>{t.name}</span><span>${t.price}</span></Item>
						)
					})
				}
			</List>
		</div>
	);
}

//参类型验证
FarmView.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state,loading) {
    return {
		loading: state.loading.models.FarmView,
		datas: state.FarmView
    };
}

export default connect(mapStateToProps)(FarmView)