import React from 'react';
import { Card, Col, Row } from 'antd';
import './Card.css'
import { Link } from 'react-router-dom';
const Card2 = () => (
  <div style={{ width: '90%', margin: '0 auto' }} className='wrapper'>
    <Row gutter={[30,30]}>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }} >
        <Card title="1 - sinf" bordered={false}>
          Rus tili
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="2 - sinf" bordered={false}>
          Matematika
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="3 - sinf" bordered={false}>
          Ingliz tili
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="4 - sinf" bordered={false}>
          Ona tili
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="5 - sinf" bordered={false}>
         <Link to={"savollar"}>
         Informatika
         </Link>
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="6 - sinf" bordered={false}>
          Rus tili
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="7 - sinf" bordered={false}>
          Kimyo
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="8 - sinf" bordered={false}>
          Algebra
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="9 - sinf" bordered={false}>
          Fizika
        </Card>
      </Col>
      <Col xs={24} sm={12} span={8} style={{ textAlign: 'center' }}>
        <Card title="10 - sinf" bordered={false}>
          Geometriya
        </Card>
      </Col>
    </Row>
  </div>
);

export default Card2;



// import React from 'react';
// import './Card.css'

// const Card2 = () => (
//   <div className="wrapper">
//     <Row gutter={30}>
//     
//     <Col span={5}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//     <Col span={5}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//   </Row>
//   </div>
// );
// export default Card2;