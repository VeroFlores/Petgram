import styled from 'styled-components'
export const List = styled.ul`
display:flex;
overflow:scroll;
&::-webkit-scrollbar {
    display: none;
  }
width:100%;
`
export const Item = styled.li`
padding :0px 8px;
`
