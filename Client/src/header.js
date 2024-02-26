import Data from './data.js'
import PlusMinus from './plusminus.js'

function Header(props){
  return(
  <>
    <header>
      <PlusMinus section="header" handle={props.handle}/>
      <div className="section">Header:{props.data.header}</div>
      <Data data={props.data}/>
    </header>
  </>);
} 

export default Header;