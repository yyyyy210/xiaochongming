import { PropTypes } from 'react'
import { connect } from 'dva';

function viewSpot({ location }) {

	return (
		<div>
			viewSpot
		</div>
	);
}

//参类型验证
viewSpot.propTypes = {
	dispatch: PropTypes.func,
	loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state, loading) {
	return {
		loading: state.loading.models.ViewSpot,
		datas: state.ViewSpot
	};
}

export default connect(mapStateToProps)(viewSpot)