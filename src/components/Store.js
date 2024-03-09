import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from "../data/storeItems.json"
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} sm={1} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            {/* extracte للحاجات الموجودة داخل ال (item)  */}
            <StoreItem {...item}/> 
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Store
