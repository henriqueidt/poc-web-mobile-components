export default function Button(props) {
  return <button onClick={(e) => props.onClick(e)}>Click here</button>;
}
