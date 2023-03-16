import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap'
import {MdPhoneInTalk} from 'react-icons/md'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <>
        <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                    <h1>Techinfo YT Pizza Shop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat sunt quas doloribus ullam delectus, architecto officiis reprehenderit ad ipsa eius ut aspernatur laborum praesentium vitae, distinctio cum optio atque corporis. Quibusdam, alias accusantium eos totam perferendis itaque saepe consectetur, iusto error explicabo reiciendis quia non est. Amet consequuntur magni deleniti debitis, vitae obcaecati porro aut voluptas neque mollitia cum expedita repudiandae alias, placeat assumenda iste temporibus consequatur. Nam, quod neque laboriosam error commodi alias quas blanditiis expedita dignissimos adipisci similique eum ipsam, facilis id tenetur esse consequatur quae provident, quia voluptatibus sapiente suscipit odit. Veniam libero deleniti, suscipit officia, quibusdam id iste recusandae reiciendis, impedit blanditiis consequatur ipsam rem vitae fugit omnis dolorum? Voluptatum sed nesciunt itaque et ad obcaecati dolor cupiditate molestias beatae laborum reprehenderit, nemo, fugiat, consequuntur minus! Neque corporis deleniti labore maxime consequuntur ratione deserunt cumque, tempore, non aliquid earum dolore blanditiis fugiat possimus ipsa doloribus fugit at tempora, molestias reiciendis eaque provident. Vitae distinctio, explicabo, iure iusto mollitia est laudantium deleniti, voluptatum quibusdam tenetur dolorum sed. Doloremque commodi laborum provident vitae repellat nobis corrupti nihil adipisci, doloribus praesentium eligendi beatae amet eaque autem sint dolorum delectus officia voluptate quae unde quidem exercitationem cupiditate. Necessitatibus, excepturi!</p>
    <Table striped bordered hover className="text-center mt-4 mb-4">
      <thead>
        <tr>
          <th className='bg-warning text-center' colSpan={4}>- - - - Contact Details - - - -</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><MdPhoneInTalk className='h-40'/></td>
          <td>Phone</td>
          <td>0124-443434</td>
        </tr>
        <tr>
          <td><BsPhoneVibrate className='h-40'/></td>
          <td>Call</td>
          <td>+9148747394</td>
        </tr>
        <tr>
          <td><AiOutlineMail/></td>
          <td>Email</td>
          <td>s4035@gmail.com</td>
        </tr>
      </tbody>
    </Table>
                </Col>
                <Col md={6}>
                    <Image src='images/farmhouse.jpg' style={{width:"100%",height:"97%"}}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact