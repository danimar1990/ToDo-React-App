import styled from "styled-components"

export const Flex = styled.div`
	display: flex;
	align-items: ${({ alignItens = 'start' }) => alignItens};
	gap: 5px
`