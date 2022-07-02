import { useDispatch } from "react-redux"
import { changeFilterCriteria } from "../../Redux/searchSlice"

export default function FilterCheckbox({title}) {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="form-control hover:bg-base-300 rounded-lg px-1">
        <label className="label cursor-pointer">
          <span className="label-text">{title}</span>
          <input type="checkbox" className="checkbox checkbox-primary" onClick={()=> dispatch(changeFilterCriteria(title))} />
        </label>
      </div>
    </div>
  )
}
