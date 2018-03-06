import React, { Component } from 'react';

export default class App extends Component {
	render() {
		const style = {
			divRootStyle: {
				width: '100%',
				display: 'inline-block'
			},
			divHeaderStyle: {
				textAlign: 'center',
				height: '136px',
				width: '100%',
				display: 'inline-block',
				backgroundColor: 'black',
				lineHeight: '16px'
			},
			textBoldHeaderStyle: {
				color:'white',
				textAlign : 'center',
				fontSize: '20px',
				fontWeight: 'bold',
				fontFamily: 'sans-serif',
				lineHeight: '8px'
			},
			textThinHeaderStyle: {
				color:'white',
				textAlign : 'center',
				fontSize: '16px',
				fontFamily: 'sans-serif',
				fontWeight: '200',
				lineHeight: '8px',
				letterSpacing: '1px'
			},
			divStyle: {
				height: '68px',
				width: '90%',
				display: 'inline-block',
				padding: '5%',
				borderBottom: '1px solid lightgray'
			},
			divSplit65Style: {
				width: '65%',
				display: 'inline-block'
			},
			divSplit35Style: {
				width: '35%',
				display: 'inline-block'
			},
			textBoldStyle: {
				textAlign : 'left', 
				fontSize: '20px',
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
				lineHeight: '18px',
				letterSpacing: '0.5px'
			},
			textLeftThinStyle: {
				textAlign : 'left',
				fontSize: '1em',
				fontFamily: 'sans-serif',
				fontWeight: '200',
				lineHeight: '18px'
			},
			textRightThinStyle: {
				textAlign : 'center',
				fontSize: '1em',
				fontFamily: 'sans-serif',
				fontWeight: '200',
				lineHeight: '18px'
			},
			textCenterStyle: {
				textAlign : 'center',
				fontSize: '21px',
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
				lineHeight: '18px',
				letterSpacing: '0px'
			},
			divImgStyle: {
				padding: '10px 0'
			},
			logoImage: {
				width: '48px',
				height: '48px',

			}
		}
		return(
			<div className='root' style={style.divRootStyle}>
				<div style={style.divHeaderStyle}>
					<div style={style.divImgStyle}>
						<div>
							<h2 style={style.textBoldHeaderStyle}>
							ROHASO MESSENGER SERVICE</h2>
							<h2 style={style.textThinHeaderStyle}>
							Deliver your items quickly and safely</h2>
						</div>
					</div>
				</div>
				<div style={style.divStyle}>
					<div style={style.divSplit65Style}>
						<div>
							<h2 style={style.textBoldStyle}>
							SENDER
							</h2>
						</div>
						<div>
							<h2 style={style.textLeftThinStyle}>
							Tap to search addresses
							</h2>
						</div>
					</div>
					<div style={style.divSplit35Style}>
						<div>
							<h2 style={style.textBoldStyle}>
							RECENT
							</h2>
						</div>
						<div>
							<h2 style={style.textRightThinStyle}>
							{">"}
							</h2>
						</div>
					</div>
				</div>
				<div style={style.divStyle}>
					<div style={style.divSplit65Style}>
						<div>
							<h2 style={style.textBoldStyle}>
							RECIPIENT
							</h2>
						</div>
						<div>
							<h2 style={style.textLeftThinStyle}>
							Tap to search addresses
							</h2>
						</div>
					</div>
					<div style={style.divSplit35Style}>
						<div>
							<h2 style={style.textBoldStyle}>
							RECENT
							</h2>
						</div>
						<div>
							<h2 style={style.textRightThinStyle}>
							{">"}
							</h2>
						</div>
					</div>
				</div>
				<div style={style.divStyle}>
					<div style={style.divSplit65Style}>
						<div>
							<h2 style={style.textBoldStyle}>
							NOTES TO DRIVER
							</h2>
						</div>
						<div>
							<h2 style={style.textLeftThinStyle}>
							Specify order details
							</h2>
						</div>
					</div>
					<div style={style.divSplit35Style}>
						<div>
							<h2 style={style.textRightThinStyle}>
							{">"}
							</h2>
						</div>
					</div>
				</div>
				<div style={style.divStyle}>
					<div style={style.divSplit65Style}>
						<div>
							<h2 style={style.textBoldStyle}>
							ROUND-TRIP
							</h2>
						</div>
						<div>
							<h2 style={style.textLeftThinStyle}>
							Set as round-trip
							</h2>
						</div>
					</div>
				</div>
				<div style={style.divStyle}>
					<div style={style.divRootStyle}>
						<div>
							<h2 style={style.textCenterStyle}>
							NEXT
							</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
