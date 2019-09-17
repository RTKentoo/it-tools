import React, { Component } from 'react'

class AccountSyntax extends Component {
	constructor() {
		super()
		this.state = {
			accountSyntaxToolInput: "",
			convertedAccount: ""
		}

		this.onClick = this.onClick.bind(this)
		this.onChange = this.onChange.bind(this)
		this.clearField = this.clearField.bind(this)
	}

	clearField = () => 
		this.setState({
			accountSyntaxToolInput: ''
		})

	onClick() {
		let str = this.state.accountSyntaxToolInput;
		str = str.replace(/\s/g,'')
		console.log(str)

		if(str.length % 7 != 0) {
			this.setState(() => ({convertedAccount: "Account list not divisible by 7. "
				+ "Cancelling operation."}))
		} else {
			console.log(str)
			let accounts = []
			let finalAccountsList = ""
			for(let i=0, charsLength = str.length; i < charsLength; i+=7) {
				accounts.push(str.substring(i, i+7));
			}

			for(let account of accounts) {
				finalAccountsList += account + "|";
			}

			this.setState({
				accountSyntaxToolInput: '',
				convertedAccount: finalAccountsList
			})
		}
	}

	onChange = (event) => this.setState({accountSyntaxToolInput: event.target.value})

	render() {
		return(
			<div className="tc">
				<h2>Account Syntax Tool</h2>{}
				<textarea className="h5" onChange={this.onChange}>{this.accountSyntaxToolInput}</textarea>
				<br />
				<button onClick={this.onClick}>Submit</button>
				<button onClick={this.clearField}>Clear</button>
				<br />
				<p>{this.state.convertedAccount}</p>
			</div>
		)
	}
}

export default AccountSyntax