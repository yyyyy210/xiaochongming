import { PropTypes } from 'react'
import { connect } from 'dva';
import { WhiteSpace, List, Flex, Button } from 'antd-mobile';
const Item = List.Item;

function DishPackage({loading, dispatch , datas}) {
    const { dishPackage } = datas;

	return (
		<div>
            {
                dishPackage.id
                &&
                <div>
                    <div>
                        <img src={dishPackage.covers[0]} />
                        <span>{dishPackage.name}</span>
                        <p>{dishPackage.subname}</p>
                    </div>
                    <WhiteSpace />
                    <List renderHeader={() => '套餐内容'} className="my-list">
                        {
                            dishPackage.dishes.map((t, index)=>{
                                return (
                                    <Item key={index} extra={'￥'+t.price+'('+t.number+'份)'}>{t.name}</Item>
                                )
                            })
                        }
                    </List>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item>有效期</Flex.Item>
                        <Flex.Item>
                            <span>{dishPackage.use_start} 至 {dishPackage.use_end}</span>
                            <span>节假日通用 bool</span>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item><span>￥{dishPackage.price}</span><span>￥{dishPackage.orig_price}</span></Flex.Item>
                        <Flex.Item><Button>立即购买</Button></Flex.Item>
                    </Flex>
                </div>
            }
		</div>
	);
}

//参类型验证
DishPackage.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool
}

//state注入进来
function mapStateToProps(state,loading) {
    return {
		loading: state.loading.models.DishPackage,
		datas: state.DishPackage
    };
}

export default connect(mapStateToProps)(DishPackage)