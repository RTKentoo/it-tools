import React, { Component } from 'react'
import tachyons from 'tachyons'

class AccountSyntax extends Component {
	constructor(props) {
		super(props)
		this.state = {
			accountToolUserInput: "",
			convertedAccount: ""
		}

		this.onClick = this.onClick.bind(this)
		this.onChange = this.onChange.bind(this)
		this.clearField = this.clearField.bind(this)
	}

	clearField = () => this.setState({ 
		accountToolUserInput: null, 
		convertedAccount: "" 
	})


	onClick = () => {
		if(this.state.accountToolUserInput != null) {
			let str = this.state.accountToolUserInput.replace(/\s/g,'');
			

		// formatAccount(str)

		if(str.length % 7 === 0) {
			console.log(str)
			let accounts = []
			let finalAccountsList = ""

			for(let i=0, charsLength = str.length; i < charsLength; i+=7) {
				accounts.push(str.substring(i, i+7))
			}

			for(let account of accounts) {
					finalAccountsList += account + "|"
			}

			finalAccountsList = finalAccountsList.slice(0, -1)

			this.setState({
				accountToolUserInput: "",
				convertedAccount: finalAccountsList
			})

		} else {
			this.setState(() => ({
				...this.state,
				convertedAccount: "Not a valid account string"}))
		}}
	}

	onChange = (event) => this.setState({...this.state, accountToolUserInput: event.target.value})

	render() {
		return(
			<div className="flex flex-column items-center tc">
				<h2>Account Syntax Tool</h2>{}
				<textarea className="h5 mw9" onChange={this.onChange}>{this.accountToolUserInput}</textarea>
				<br />
				<button onClick={this.onClick}>Submit</button>
				<button onClick={this.clearField}>Clear</button>
				<br />
				<p>Output</p>
				<div className="ba w5 h5 mw9">
					<p>{this.state.convertedAccount}</p>
				</div>
			</div>
		)
	}
}

export default AccountSyntax