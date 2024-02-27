import logo from './logo.svg';
import './App.css';
import './styles.css'
import React from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Article from './article.js'
import Left from './left.js'
import Right from './right.js'
const superagent = require('superagent');


function update(section, value) {
  return new Promise((resolve,reject) => {
    var url = `/update/${section}/${value}`;
    superagent
      .get(url)
      .end(function(err,res){
        err ? reject(null) : resolve(res.body);
      });
  });
}

function read() {
  return new Promise((resolve, reject) => {
    var url = '/data';
    superagent 
      .get(url)
      .end(function(err, res){
        err ? reject(null) : resolve(res.body);
      });
  });
}


function App() {

  const [data, setData] = React.useState({header:0,left:0,article:0,right:0,footer:0});

  React.useEffect(() => {

    const response = read()
      .then(res => {
        setData(res)
      });

  },[]);

  function handle(section) {
    //update db & local state
    const response = update(section.name, section.value)
      .then(res => {
        setData(res)
      });
  }

  return (
    <div className="grid">
      <Header handle={handle} data = {data}/>
      <Left handle={handle} data = {data}/>
      <Article handle={handle} data = {data}/>
      <Right handle={handle} data = {data}/>
      <Footer handle={handle} data = {data}/>
    </div>
  );
}

export default App;
