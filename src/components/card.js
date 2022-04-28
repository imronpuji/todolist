import Header from './header'
function Section({comp, title}){
	return (
			<div className="basis-1/2 rounded border-2 shadow-md m-3">
	          	<Header title={title}/>
	          	{comp}
	        </div>
		)
}

export default Section