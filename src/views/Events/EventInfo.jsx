
function EventInfo(props) {
  const {
    image,
    title,
    date,
    description
  } = props
  return (
    <div className="w-full m-4 p-4 border-4 border-[#E5C28A] rounded flex flex-col items-center gap-1 bg-slate-700">
      <img src={image} alt={`banner for ${title}`}/>
      <h2 className="text-3xl text-[#eee9df]" >{date}</h2>
      <p className="text-lg text-[#eee9df] ">{description}</p>
    </div>
  )
}

export default EventInfo