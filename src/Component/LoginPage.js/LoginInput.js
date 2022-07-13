import { useState } from "react"

export default function LoginInput({ placeholder, value, onChangeFunc }) {
  const [inputBg, setInputBg] = useState("")

  return (
    <div
      className={`mb-4 input-group rounded-[1rem] hover:bg-base-100 border-2 hover:border-primary bg-base-100 ${inputBg}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="px-6 py-0 w-full h-[3rem] caret-primary text-primary-content"
        style={{
          border: "none",
          outline: "none",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
        value={value}
        onChange={(e) => {
          onChangeFunc(e.target.value)
        }}
        onFocus={() => setInputBg("border-primary")}
        onBlur={() => setInputBg("")}
      />
      <div className="mr-4 bg-base-100 flex justify-center items-center">
        {placeholder === "姓名" ? (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="7" r="5" stroke="black" strokeWidth="2" />
            <path
              d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : placeholder === "電郵地址" ? (
          <svg
            width="24px"
            height="24px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 75.294 75.294"
          >
            <path
              d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
              stroke="black"
              strokeWidth="0px"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24px"
            height="24px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 203.096 203.096"
          >
            <g>
              <path
                d="M153.976,73.236h-3.308V49.115C150.669,22.033,128.634,0,101.549,0C74.465,0,52.43,22.033,52.43,49.115v24.121H49.12
 c-9.649,0-17.5,7.851-17.5,17.5v94.859c0,9.649,7.851,17.5,17.5,17.5h104.856c9.649,0,17.5-7.851,17.5-17.5V90.736
 C171.476,81.087,163.626,73.236,153.976,73.236z M67.43,49.115C67.43,30.304,82.736,15,101.549,15
 c18.813,0,34.119,15.304,34.119,34.115v24.121H67.43V49.115z M156.476,185.596c0,1.355-1.145,2.5-2.5,2.5H49.12
 c-1.355,0-2.5-1.145-2.5-2.5V90.736c0-1.355,1.145-2.5,2.5-2.5H59.93h83.238h10.808c1.355,0,2.5,1.145,2.5,2.5V185.596z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M101.547,116.309c-4.142,0-7.5,3.357-7.5,7.5v28.715c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-28.715
 C109.047,119.666,105.689,116.309,101.547,116.309z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  )
}
