import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaUserCircle,
  FaAccessibleIcon,
} from 'react-icons/fa';

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-danger">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span className="pr-2">{details.name?.first}</span>
            <span className="pr-2">{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          <span className="pr-2 text-success">{details.location?.city},</span>
          <span className="pr-2 text-success">{details.location?.state},</span>
          <span className="pr-2 text-success">
            {details.location?.country}-
          </span>
          <span className="pr-2 text-success">
            {details.location?.postcode}
          </span>
          <br />
          <FaEnvelope />
          <span className="pr-2 text-primary"> {details.email} </span>
          <br />
          <FaUserCircle />
          <span className="text-danger">{details.login?.username}</span>
          <br />
          <FaPhone />
          <span className="pr-2 text-secondary"> {details.phone},</span>
          <span className="pr-2 text-secondary"> {details.cell}</span>
          <br />
          <FaAccessibleIcon />
          {/* <span className="pr-2"> {details.dob?.date}</span> */}
          <span className="pr-2"> {details.dob?.age}</span>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
