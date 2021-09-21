//640, 768, 1024, 1280, 1536
import React from "react";
import Navigation from './commonComponents/Navigation';
import MainRoutes from './routes/MainRoutes';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        {/* <h1 className="lg:hidden text-9xl text-white bg-black">
          Anthony Ye
        </h1> */}
        <Navigation />
        <MainRoutes />
      </>
    );
  }
}

export default App;
