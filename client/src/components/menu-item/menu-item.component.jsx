import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  TitleContainer,
  SubtitleContainer,
  ContentContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
    <ContentContainer className="content">
      <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer className="subtitle">SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
