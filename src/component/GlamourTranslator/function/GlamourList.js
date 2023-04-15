export default function GlamourList({ glamourList }) {
  console.log(glamourList)
  return (
    <div className = "Glamour-List">
      {glamourList.map((it) => (
        <div key = {it.id}>
          <div>{it.item}</div>
          <div style = {it.code}>⬤</div>
          <div>{it.dye}</div>
        </div>
      ))}
    </div>
  )
}

GlamourList.defaultProps = {
  glamourList: [],
}