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
							<div>
								<img style={style.logoImage} src={logo} alt={"Rohaso"} /> 
							</div>
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

const logo = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNTgxLjQgNTgxLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4MS40IDU4MS40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzFfMTE3XyI+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0yODkuNDI1LDM3Ni4xMjVjLTI4LjA1LDAtNTEsMjIuOTUtNTEsNTFWNTMwLjRjMCwyOC4wNSwyMi45NSw1MSw1MSw1MXM1MS0yMi45NSw1MS01MVY0MjcuMTI1ICAgICBDMzQwLjQyNSwzOTkuMDc1LDMxNy40NzYsMzc2LjEyNSwyODkuNDI1LDM3Ni4xMjV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxwYXRoIGQ9Ik00NzQuMyw2My43NWgtOTguMTc1QzM2NC42NSwyNi43NzUsMzMwLjIyNiwwLDI4OS40MjUsMHMtNzUuMjI1LDI2Ljc3NS04Ni43LDYzLjc1aC05Ni45ICAgICBjLTE0LjAyNSwwLTI1LjUsMTEuNDc1LTI1LjUsMjUuNXMxMS40NzUsMjUuNSwyNS41LDI1LjVIMjA0bDAsMGM2LjM3NSwyMS42NzUsMjAuNCwzOS41MjUsMzkuNTI1LDUxICAgICBjLTY4Ljg1LDIwLjQtMTE5Ljg1LDg0LjE1LTExOS44NSwxNTkuMzc1VjQ1OWMwLDIyLjk1LDE5LjEyNSw0Mi4wNzUsNDIuMDc1LDQyLjA3NWgzNC40MjVWNDI4LjQgICAgIGMwLTQ5LjcyNiw0MC44LTkwLjUyNSw5MC41MjUtOTAuNTI1YzQ5LjcyNSwwLDkwLjUyNSw0MC44LDkwLjUyNSw5MC41MjV2NzIuNjc1aDM0LjQyNWMyMi45NSwwLDQyLjA3NS0xOS4xMjUsNDIuMDc1LTQyLjA3NSAgICAgVjMyNi40YzAtNzUuMjI2LTUxLTE0MC4yNS0xMTkuODUxLTE1OS4zNzVjMTkuMTI1LTExLjQ3NSwzMy4xNS0yOS4zMjUsMzkuNTI1LTUxbDAsMGg5OC4xNzVjMTQuMDI1LDAsMjUuNS0xMS40NzUsMjUuNS0yNS41ICAgICBDNDk5LjgsNzUuMjI1LDQ4OC4zMjUsNjMuNzUsNDc0LjMsNjMuNzV6IE0yODkuNDI1LDE0MS41MjVjLTI4LjA1LDAtNTEtMjIuOTUtNTEtNTFjMC0yOC4wNSwyMi45NS01MSw1MS01MXM1MSwyMi45NSw1MSw1MSAgICAgQzM0MS43LDExOC41NzUsMzE4Ljc1LDE0MS41MjUsMjg5LjQyNSwxNDEuNTI1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'