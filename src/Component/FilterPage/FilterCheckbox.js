import { useEffect, useContext } from "react"
import { FilterContext } from "../../Page/FilterPage"

export default function FilterCheckbox({title}) {

  const {setCriteria, criteria, data, setFiltered} = useContext(FilterContext)

  const filtering = () => {
    if (criteria.includes(title) === true) {
      let newCriteria = criteria
      newCriteria.splice(criteria.indexOf(title),1)
      setCriteria([...newCriteria])
      return
    } else {
      setCriteria([...criteria, title])
      return
    }
  }

  useEffect(() => {
    if (criteria.length === 0) {
      setFiltered(data)
      return
    }
    let filtered = data
    for (let i=0; i<criteria.length; i++) {
      filtered = filtered.filter((item) => {
        return item.cat.includes(criteria[i]) || item.location.includes(criteria[i])
      })
    }
    setFiltered(filtered)
  },[criteria])

  return (
    <div>
      <div className="form-control hover:bg-base-300 rounded-lg px-1">
        <label className="label cursor-pointer">
          <span className="label-text">{title}</span>
          <input type="checkbox" className="checkbox checkbox-primary" onClick={()=> filtering()} />
        </label>
      </div>
    </div>
  )
}
