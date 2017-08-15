import { PropTypes } from 'react'
import { Popup, Icon, Flex } from 'antd-mobile';

import './style.less'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
  // Note: the popup content will not scroll.
  maskProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

function HouseInfo({ hservice}) {
	function house_service() {
		Popup.show(<div>
			<h3>配套设施</h3>
			<div className="housepopupco">
				<Flex>
					<Flex.Item>无线WIFI{hservice.wifi}</Flex.Item>
					<Flex.Item>有线网络{hservice.wired_network}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>电梯{hservice.elevator}</Flex.Item>
					<Flex.Item>停车位{hservice.parking}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>空调{hservice.ari_conditioning}</Flex.Item>
					<Flex.Item>暖气{hservice.heating}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>冰箱{hservice.refrigerator}</Flex.Item>
					<Flex.Item>洗衣机{hservice.washing_machine}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>电视{hservice.tv}</Flex.Item>
					<Flex.Item>电脑{hservice.computer}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>饮水机{hservice.drinking}</Flex.Item>
					<Flex.Item>拖鞋{hservice.slipper}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>淋浴{hservice.shower}</Flex.Item>
					<Flex.Item>24小时热水{hservice.hot_water}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>浴缸{hservice.bathtub}</Flex.Item>
					<Flex.Item>沐浴露洗发水{hservice.shampoo}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>毛巾浴巾{hservice.towel}</Flex.Item>
					<Flex.Item>牙具香皂{hservice.toothbrush}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>保安{hservice.security}</Flex.Item>
					<Flex.Item>对讲系统{hservice.walkie_talkie}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>无障碍设施{hservice.accessibility}</Flex.Item>
					<Flex.Item>早餐{hservice.breakfast}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>可以吸烟{hservice.smoking}</Flex.Item>
					<Flex.Item>允许聚会{hservice.party}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>欢迎小孩{hservice.children}</Flex.Item>
					<Flex.Item>欢迎老人{hservice.old_people}</Flex.Item>
				</Flex>
				<Flex>
					<Flex.Item>可养宠物{hservice.pet}</Flex.Item>
				</Flex>
			</div>
			<div className="housepopupclose" onClick={house_serviceHide}>关闭</div>
		</div>, { animationType: 'slide-up', maskProps, maskClosable: false, className:'housepopup' });
	}

	function house_serviceHide() {
		Popup.hide();
	};

	return (
        <div className="scrollX">
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.wifi}WiFi</span></div></div>
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.wired_network}有线网络</span></div></div>
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.elevator}电梯</span></div></div>
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.parking}停车位</span></div></div>
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.ari_conditioning}空调</span></div></div>
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.heating}暖气</span></div></div>
            <div className="item"><div className="itemco"><img src="images/banner.jpg" /><span>{hservice.refrigerator}冰箱</span></div></div>
            <div className="item" onClick={house_service}><div className="itemco"><img src="images/banner.jpg" /><span><Icon type="ellipsis" />更多</span></div></div>
        </div>
	);
}

//参类型验证
HouseInfo.propTypes = {
	hservice: PropTypes.object,
}

export default HouseInfo