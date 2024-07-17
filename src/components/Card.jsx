import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
`;

const Texts = styled.div``;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Details>
          <ChannelImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Texts>
            <Title>Test video</Title>
            <ChannelName>Yogesh</ChannelName>
            <Info>202,000 · 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
