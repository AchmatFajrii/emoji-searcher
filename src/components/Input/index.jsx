
const Input = ({onChange, value}) => {
  return (
    <>
    <input onChange={onChange} value={value} placeholder="Search" className="input shadow-lg border-none rounded-md mb-4 p-[10px] text-gray-700 text-[16px] font-semibold" type="text" />
    </>
  )
}

export default Input