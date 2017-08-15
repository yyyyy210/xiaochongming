class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render() {
       
        return(
            <div className="login">
                login
            </div>
        )
    }
}

//参类型验证
Login.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool
}

export default Login