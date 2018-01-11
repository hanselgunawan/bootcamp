import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard name="SpongeBob"
                occupation="Cook"
                location="Bikini Bottom"
                alt="Spongebob"
                imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"
    />
     <FriendCard name="Mr Krab"
                 occupation="CEO"
                 location="Bikini Bottom"
                 alt="Mr Krab"
                 imgSrc="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
     />
     <FriendCard name="Patrick"
                 occupation="Cashier"
                 location="Bikini Bottom"
                 alt="Patrick"
                 imgSrc="https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
     />
  </Wrapper>
);

export default App;
