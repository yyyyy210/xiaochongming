import { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { Carousel, Flex, WhiteSpace } from 'antd-mobile';
import Tabs from 'Components/Tabs'
import {ReviewStar} from 'Components/Review'
import './style.less'

class FarmHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			coversIndex: 'covers',
			covers: []
		};

		this.setCovers = this.setCovers.bind(this);
		this.onTabClick = this.onTabClick.bind(this);
	}

	componentWillUpdate(){
		const { village } = this.props.datas;
		//如果没有封面就赋值
		if(this.state.covers.length === 0 && village.covers){
			this.setCovers(village.covers, 'covers');
		}
	}

	//赋值封面
	setCovers(covers, coversIndex){
		this.setState({ covers, coversIndex });
	}

	//切换封面
	changeCovers(coversIndex){
		const { village } = this.props.datas;
		this.setState({ covers:village[coversIndex], coversIndex });
	}

	//切换tab
	onTabClick(index){
		const { dispatch } = this.props;
		if(index === 0){
			dispatch({type: 'FarmHome/houses'})
		}

		if(index === 1){
			dispatch({type: 'FarmHome/restaurants'})
		}

		if(index === 2){
			dispatch({type: 'FarmHome/orchards'})
		}
	}

	render() {
		const { loading, dispatch, datas } = this.props;
		const { village, houses, restaurants, orchards } = datas;

		function jumpFarmHouse(id){
			dispatch(routerRedux.push(`/farm/house/${id}`))
		}

		function jumpFarmHome(id) {
			dispatch(routerRedux.push(`/farm/view/${id}`))
		}
		
		function jumpGather(id) {
			dispatch(routerRedux.push(`/gather`))
		}


		return (
			<div className="farmhome">
				<div>
					{
						this.state.coversIndex === 'covers'
						?
						<span onClick={()=>{this.changeCovers('plan_covers')}}>查看平面图</span>
						:
						<span onClick={()=>{this.changeCovers('covers')}}>查看封面图</span>
					}
					
					<Carousel className="banner" autoplay={false} infinite selectedIndex={0} swipeSpeed={35}>
						{
							this.state.covers.map((t,index)=>{
								return <img key={index} src={t} style={{ height: 300, width:'100%' }} />
							})
						}
					</Carousel>
				</div>
				<WhiteSpace />
				<Tabs lineColor="#f00" fontColor="#f00" onTabClick={this.onTabClick}>
					<div name="独栋洋房">
						<ul>
							{
								houses.map((t, index)=>{
									return(
										<li key={index} onClick={()=>jumpFarmHouse(t.id)}>
											<div className="farmBox">
												<img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={t.covers[0]} />
												<div className="row-text">
													<span>{t.name}</span>
													<ReviewStar />
													<p>{t.name}</p>
													<var>¥<span>{t.price}</span></var>
												</div>
											</div>
											<div className="farmTag star">
												{
													t.tags.map((t1, index1)=>{
														return (
															<span key={index1}>{t1.name}</span>
														)
													})
												}
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
					<div name="当地风味">
						<ul>
							{
								restaurants
								&&
								restaurants.map((t, index)=>{
									return(
										<li key={index} onClick={()=>jumpFarmHome(t.id)}>
											<div className="farmBox">
												<img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={t.cover} />
												<div className="row-text">
													<span>{t.name}</span>
													<ReviewStar />
													<p>{t.name}</p>
													<var>¥<span>{t.price_per}/人</span></var>
												</div>
											</div>
											<div className="farmTag">
												<b>特色菜</b>
												{
													t.dishes.map((t1, index1)=>{
														return (
															<span key={index1}>{t1.name}</span>
														)
													})
												}
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
					<div name="农家生活">
						<ul>
							{
								orchards
								&&
								orchards.map((t, index)=>{
									return (
										<li key={index} onClick={()=>jumpGather(1)}>
											<div className="farmBox">
												<img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={t.covers[0]} />
												<div className="row-text">
													<span>{t.name}</span>
													<p>{t.describe}</p>
												</div>
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
				</Tabs>
			</div>
		)
	}

}

//参类型验证
FarmHome.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state,loading) {
	return {
		loading: state.loading.models.FarmHome,
		datas: state.FarmHome
	};
}

export default connect(mapStateToProps)(FarmHome)