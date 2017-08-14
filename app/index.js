var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


import Header from './components/header';
import Welcome from './components/welcome';
import About from './components/about';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Welcome />
      <About />
      <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
