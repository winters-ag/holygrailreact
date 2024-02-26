import Data from './data.js'
import PlusMinus from './plusminus.js'

function Article(props){
  return(<>
    <article>
      <PlusMinus section="article" handle={props.handle}/>
      <div className="section">Article:{props.data.article}</div>
      <Data data={props.data}/>
    </article>
  </>);
}

export default Article;