import styled from "styled-components"

import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { mobile } from "../responsive"

const Container=styled.div`
       display: flex;
       padding: 15px;
       ${mobile({flexDirection: "column",padding: "0px",marginTop: "10px"})};
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
