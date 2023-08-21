import styled from "styled-components"

const Container = styled.div`
     height: 50px;
     background-color: #137171;
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 18px;
     font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free Shipping on Orders Over $50
      </Container>
    </div>
  )
}

export default Announcement
