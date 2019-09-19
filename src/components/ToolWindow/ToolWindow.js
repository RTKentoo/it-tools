import React, { Component } from 'react'
import styled from 'styled-components'

const ToolWindowWrapper = styled.div`
	margin: 0;
	width: 500px;
	border: 1px solid black;
	max-width: 35%;
	text-align: center;



`

class ToolWindow extends Component {
	contructor(props) {
		this.super(props)
		this.state = {}
	}


	render() {
		return(
			<ToolWindowWrapper>
				<p>ToolWindow</p>
				<a href='../Tools/AccountSyntax'>Account Syntax</a>
			</ToolWindowWrapper>
		)
	}
}

export default ToolWindow