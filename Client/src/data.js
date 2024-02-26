function Data(props){
  return(<div>
    Header: {props.data.header},
    Left: {props.data.left},
    Article: {props.data.article},
    Right: {props.data.right},
    Footer: {props.data.footer},
    
  </div>)
}

export default Data;