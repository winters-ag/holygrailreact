import Data from './data.js'
import PlusMinus from './plusminus.js'

function Footer(props){
  return(<>
    <footer>
      <PlusMinus section="footer" handle={props.handle}/>
      <div className="section">Footer:{props.data.footer}</div>
      <Data data={props.data}/>
    </footer>
  </>);
}

export default Footer;