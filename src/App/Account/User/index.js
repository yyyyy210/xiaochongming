import { PropTypes } from 'react'
import { connect } from 'dva';
import { Flex, WhiteSpace } from 'antd-mobile';
import './style.less';

class AccountUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="accountuser">
				<div className="accountHead">
					<Flex>
						<Flex.Item className="aa">123</Flex.Item>
						<Flex.Item>456</Flex.Item>
						<Flex.Item>789</Flex.Item>
					</Flex>
				</div>
				<div>

				</div>
			</div>
		)
	}

}

//参类型验证
AccountUser.propTypes = {
	dispatch: PropTypes.func,
	loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state, loading) {
	return {
		loading: state.loading.models.AccountUser,
		datas: state.AccountUser
	};
}

export default connect(mapStateToProps)(AccountUser)