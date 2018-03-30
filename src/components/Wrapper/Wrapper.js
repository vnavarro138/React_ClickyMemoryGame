import React from "react";
import "./Wrapper.css";

const Wrapper = props => 
<div className="container-fluid">
	<div className="row">
    	<div className="col-xs-12 col-sm-12 col-md-3">
	{props.children}
		</div>
	</div>
</div>
;

export default Wrapper;
