export default function OrderedProduct({
  pid,
  name,
  date,
  price,
  img,
  amount,
}) {
  return (
    <div className="w-full flex">
      <div className="mr-4">
        <img src={img} alt="" className="w-[12rem] h-auto object-cover" />
      </div>
      <div>
        <p>產品編號：{pid}</p>
        <p>產品名稱：{name}</p>
        <p>使用日期：{date}</p>
        <p>產品價格：{price}</p>
        <p>購買數量：{amount}</p>
      </div>
    </div>
  )
}
