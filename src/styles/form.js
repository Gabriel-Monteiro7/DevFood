import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';
import { md, sm, xl } from './global';

export const StyleForm = styled(Form)`
	position: relative;
	background: white !important;
	/* border-radius: 8px; */
	padding: 20px;
	width: 75%;
	@media (max-width: ${sm}px) {
		width: 100%;
		padding: 20px 0px;
	}
	margin: auto;
	input,
	select,
	textarea {
		width: 100%;
		outline: none;
		font-size: 15px;
		border: 0px;
		padding: 10px 20px;
		color: #6e6e6e;
		background: #d9d9d9;
	}
	input {
		border: none;
		overflow: visible;
		border-radius: 2px;
		outline: none;
		width: 100%;
		border-radius: 40px;
	}
	select {
		border-radius: 40px;
		cursor: pointer;
		-webkit-appearance: none;
		option {
			background: white;
		}
	}
	textarea {
		border-radius: 15px;
		min-height: 130px;
		background: #d9d9d9;
	}

	button {
		border: 0px;
		padding: 12px 105px;
		background: #f58324;
		color: white;
		font-size: 15px;
		margin: 15px auto;
		@media (max-width: ${sm}px) {
			padding: 12px 95px;
		}
		&:hover {
			background: ${darken(0.05, '#F58324')};
		}
	}
	label {
		font-size: 20px;
		margin: 17px 0px;
		color: #f58324;
	}
	div {
		margin: 5px 0px;
		span {
			font-size: 12px;
			color: #fe2e2e;
		}
	}
	#id {
		vertical-align: sub;
	}
	.row {
		padding: 20px 160px;
		@media (max-width: ${xl}px) {
			padding: 20px 100px;
		}
		@media (max-width: ${md}px) {
			padding: 20px 0px;
		}
	}
	svg {
		position: absolute;
		right: 35px;
		top: 13px;
	}
	.btn-delete {
		right: 20px;
		font-size: 27px;
		cursor: pointer;
	}
`;
