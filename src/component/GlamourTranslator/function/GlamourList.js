export default function GlamourList({ glamourList }) {
  console.log("GlamourList", glamourList)
  return (
    <div>
      {glamourList.map((it) => (
        <div key = {it.id}>
          <div>{it.item}</div>
          <div>{it.dye}</div>
        </div>
      ))}
    </div>
  )
}

GlamourList.defaultProps = {
  glamourList: [],
}