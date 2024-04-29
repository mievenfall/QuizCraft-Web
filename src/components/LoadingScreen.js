import "../styles/LoadingScreen.css"
import spinner from "../imgs/spinner.gif"

const LoadingScreen = () => {
    return (
      <div className="loading-screen">
        <img className="spinner-img"
            src={spinner}
            style={{ width: '50px', margin: 'auto', display: 'block' }}
            alt="Loading..."
          />
      </div>
    );
  };

  export default LoadingScreen;