function Section({comp, title}){
	return (
			<div className="basis-1/2 rounded border-2 shadow-md m-3">
	          	<h1 className="m-4 font-sans font-serif">{title}</h1>
	          	{comp}
	        </div>
		)
}

export default Section