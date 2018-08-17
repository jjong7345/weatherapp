import styled, { css } from "styled-components";

export const h_box_base = css`
	flex-flow: row nowrap;
	flex: 0 0 auto;
	justify-content: space-around;
	align-items: stretch;
	display: flex;
	padding: 0;
`;

export const H_Box = styled.div`
	${h_box_base};
`;

export const H_Box_Center = styled.div`
	${h_box_base} 
	justify-content: center;
`;

export const H_Box_Align_Center = styled.div`
	${h_box_base} 
	align-items: center;
	justify-content: center;
	flex-flow: row wrap;
`;

export const H_Box_Wrap = styled.div`
	${h_box_base} 
	flex-flow: row wrap;
`;
