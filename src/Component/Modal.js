import { useNavigate } from "react-router-dom"

export default function Modal({ title, ctn, btn, modalId }) {
  const navigate = useNavigate()

  return (
    <div>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl">{title}</h3>
          <p className="py-4 text-xl">{ctn}</p>
          <div className="modal-action">
            <label
              for={modalId}
              className="btn rounded-[0.5rem] btn-accent text-lg"
              onClick={() => navigate("/SLOMO-HK/cart/fillnpay")}
            >
              {btn}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
