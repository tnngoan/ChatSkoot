import React from "react";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Please enter email address for the user you want to chat with"
    );

    if (!input) return null;

    if (EmailValidator.validate(input)){
      //add chat into DB CHATS
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in Chats" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    font-weight: bold;
  }
  text-transform: uppercase;
`;

const SearchInput = styled.input`
  outline-width: 0;
  flex: 1;
  border: none;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
