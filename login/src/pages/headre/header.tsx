import "./header.scss";

const Header = () => {

    const logOutHandler = (e: any) => {
        e.preventDefault()
        localStorage.removeItem('username');
        localStorage.removeItem('userpassword');
        window.location.href = "/";
    }
    return (
        <div className="header">
            <h1>Logo</h1>
            <button className="btn" onClick={logOutHandler}>logout</button>
        </div>
    );
};

export default Header;