function Login(){

    const handleOnSubmit = () => {

    }

    return (
        <div className="form-container">
            <form onSubmit={handleOnSubmit} className="form">
                <div className="form-row-container">
                    <label htmlFor="username">Username or E-mail</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div className="form-row-container">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
            </form>
        </div>
    );
}

export default Login