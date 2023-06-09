import "./InputType.scss";

export default function InputType(props) {
  // var No = Number(props.index) + 1;
  return (
    <>
    <input 
      // className = {props.type}
      id = {props.type}
      type = "radio"
      value = {props.index}
      // eslint-disable-next-line eqeqeq
      checked = {props.select == props.index}
      onChange = {props.fc}
    />
    <label htmlFor = {props.type} className = "-label">{props.index}번 타입{props.wip}</label>
    {/* <span> {No}번 타입 </span> */}
    {/* <span> {props.index}번 타입 </span> */}
    </>
  )
}