import React,{useState} from 'react'
import{Card,Button,Row,Col,Offcanvas} from 'react-bootstrap'
import {FaRupeeSign} from 'react-icons/fa'

const Pizza = ({pizza}) => {
    const[varient,setVarient]=useState('small');
    const[quantity,setQuantity]=useState(1);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem',marginTop:'30px' }}>
    <Card.Img variant="top" src={pizza.image} style={{height:'250px'}}/>
    <Card.Body>
      <Card.Title>{pizza.name}</Card.Title>
      <hr/>
      <Card.Text>
       <Row>
        <Col md={6}>
            <h6>Varients</h6>
            <select value={varient} onChange={e=>setVarient(e.target.value)}>
                {pizza.varients.map((varient)=>(
                    <option>{varient}</option>
                ))}
            </select>
        </Col>
        <Col md={6}>
            <h6>Quantity</h6>
            <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v,i)=>(
                    <option value={i+1}>{i+1}</option>
                ))}
            </select>
        </Col>
       </Row>
      </Card.Text>
        <Row>
            <Col md={6}>Price:<FaRupeeSign/>{pizza.prices[0][varient]*quantity}</Col>
            <Col>
                <Button className='bg-blue text-black' onClick={handleShow}>Add to Cart</Button>
            </Col>
        </Row>
    </Card.Body>
  </Card>
  {/* OffCanvas */}
  <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{pizza.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card.Img variant="top" src={pizza.image} style={{height:'250px',borderRadius:'5%',marginBottom:"25px"}}/>
        <Row>
            <Col md={6}>
                <h5>Category :</h5>
            </Col>
            <Col md={6}>
                <h5>{pizza.category}</h5>
            </Col>
        </Row>
        <Row style={{marginTop:"15px"}}>
            <Col md={12}>
                <h5>Description</h5>
                <hr style={{marginTop:'0px',width:'30%'}}/>
            </Col>
            <Col md={12}>
            <p>{pizza.description}</p>
            </Col>
        </Row>
        <Row style={{marginTop:"15px"}}>
            <Col md={12}>
                <h5>Items</h5>
                <hr style={{marginTop:'0px',width:'15%'}}/>
            </Col>
            <Col md={6}>
            <p>{pizza.name}/{varient}</p>
            </Col>
            <Col md={6}>
            <p><FaRupeeSign/>{pizza.prices[0][varient]*quantity}</p>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col md={6}>
                    <h5>SubTotal:</h5>
            </Col>
            <Col md={6}>
                    <h5><FaRupeeSign/>{pizza.prices[0][varient]*quantity}</h5>
            </Col>
        </Row>
        </Offcanvas.Body>
      </Offcanvas>
  </>
  )
}

export default Pizza