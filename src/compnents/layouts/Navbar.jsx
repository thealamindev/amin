import React from 'react'
import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
import Image from '../Image';
import Logo from '../../assets/logo.png'
import Button from '../Button';
const Navbar = () => {
  return (
    <nav className="bg-primaryColor">
      <Container>
        <Flex>
          <div className="w-1/4 py-12">
            <Image src={Logo} />
          </div>
          <div className="w-1/2 py-14">
            <ul>
              <Flex className="justify-evenly">
                <List href="#" text="Man" />
                <List href="#" text="Woman" />
                <List href="#" text="Kids" />
                <List href="#" text="Collection" />
                <List href="#" text="Trends" />
              </Flex>
            </ul>
          </div>
          <div className="w-1/4 text-right py-12">
            <Button text="Login" />
            <Button className="ml-5" text="Signup" />
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar