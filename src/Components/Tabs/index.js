import { Flex } from 'antd-mobile';
import './style.less'
class Tabs extends React.Component{
    constructor(){
        super();
        this.state={ 
            currentIndex : 0
        };
        this.setIndex = this.setIndex.bind(this);
    }

    check_title_index(index){
        return index===this.state.currentIndex ? "Tab_title active" : "Tab_title";
    }

    check_item_index(index){
        return index===this.state.currentIndex ? "Tab_item show" : "Tab_item";
    }

    setIndex(index){
        const { onTabClick } = this.props;
        this.setState({currentIndex : index});
        onTabClick && onTabClick(index)
    }

    render(){
        const {lineColor = '#333',fontColor = '#333'} = this.props;
        let _this=this;
        return(
            <div className="xtabs">
                {/*动态生成Tab导航*/}
                <Flex className="Tab_title_wrap">
                    { 
                        React.Children.map( this.props.children , (element,index) => {
                            let cc = this.check_title_index(index),activeClass = {};
                            if(cc === 'Tab_title active'){
                                activeClass = {
                                    borderColor:lineColor,
                                    color:fontColor
                                }
                            }
                            return(
                                /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                                <Flex.Item onClick={ () => { this.setIndex(index) } }>
                                    <div className={ cc } style={activeClass} >{ element.props.name }</div>
                                </Flex.Item>
                            );
                        }) 
                    }
                </Flex>
                {/*Tab内容区域*/}
                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index) }>{ element }</div>
                            );
                    })}
                </div>
            </div>
            );
    }
}

export default Tabs;