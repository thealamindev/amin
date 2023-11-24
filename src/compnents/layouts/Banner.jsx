import React from 'react'
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Model from "../../assets/model.png";
import Pragraph from '../Pragraph';
import Button from "../Button";

const Banner = () => {
  return (
    <section>
      <Container>
        <Flex className="justify-between">
          <div className="w-1/2">
            <Heading
              className="font-popins font-semibold text-mainHead pr-10"
              text="Find The Best Fashion Style For You"
              as="h1"
            />
            <Pragraph
              className="text-mainP"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
            />

            <Button className="text-2xl text-white bg-black border-none hover:bg-black" text="SHOP NOW" />
          </div>
          <div className="w-1/2">
            <Image src={Model} />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Banner