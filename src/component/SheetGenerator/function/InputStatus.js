import "./InputStatus.scss";

export default function InputStatus(props) {
  return (
    <>
    <input 
      // className = {props.stat}
      id = {props.stat}
      type = "checkbox"
      name = {props.stat}
      checked = {props.value}
      onChange = {props.fc}
    />
    <label htmlFor = {props.stat} className = "-label">{props.name}</label>
    </>
  )
};