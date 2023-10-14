import Image from "next/image";
import myGif from "../public/solaronly.gif";
import { Badge, Card, Text } from "@mantine/core";

import dynamic from "next/dynamic";

import ReactFullpage from "@fullpage/react-fullpage";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

const DynamicAreaChart = dynamic(() => import("../components/areachart"), {
  loading: () => <p>Loading...</p>,
});

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section bg-[#161719]">
            <Dashboard />
          </div>
          <div className="section">
            <Analytics />
          </div>
          <div className="section">
            <History />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const Dashboard = () => {
  return (
    <div className="bg-[#161719] h-screen relative pt-36">
      <div className="relative">
        <hr className="rotate-90 w-[80px] absolute top-[60px]" />
        <div className="absolute top-[-60px] left-[20px]">
          <Text color="green" fz={"2rem"}>
            4.0 kW
          </Text>
          <Text fw="lighter">SOLAR PRODUCTION</Text>
        </div>

        <hr className="rotate-90 w-[200px] absolute top-[150px] left-[170px]" />
        <div className="absolute top-[-30px] left-[220px]">
          <Text color="orange" fz={"2rem"}>
            2.0 kW
          </Text>
          <Text fw="lighter">HOME USAGE</Text>
        </div>

        <hr className="rotate-90 w-[50px] absolute top-[362px] left-[230px]" />
        <div className="absolute top-[390px] left-[220px]">
          <Text color="white" fz={"2rem"}>
            2.0 kW
          </Text>
          <Text fw="lighter">TO GRID </Text>
        </div>

        <hr className="rotate-90 w-[80px] absolute top-[360px] left-[50px]" />
        <div className="absolute top-[400px] left-[60px]">
          <Text color="blue" fz={"2rem"}>
            2.0 kWh
          </Text>
          <Text fw="lighter">
            <strong className="text-green-600">80%</strong> capacity
          </Text>
          <Text fw="lighter">BATTERY</Text>
        </div>

        <Image src={myGif} alt="my gif" height={500} width={500} />
      </div>

      <Card
        shadow="sm"
        padding="xs"
        radius="md"
        w={"90%"}
        style={{ margin: "auto", bottom: 90, left: "5%", position: "fixed" }}
      >
        <div className="flex">
          <h1 className="text-[1.4rem] text-orange-500">- 0.6 kWh</h1>
          <span className="ml-3 mt-2">net energy so far today</span>
        </div>
      </Card>

      <Card
        shadow="sm"
        padding="xs"
        radius="md"
        w={"90%"}
        style={{ margin: "auto", bottom: 24, left: "5%", position: "fixed" }}
      >
        <div className="flex">
          <h1 className="text-[1.4rem] text-green-500">+ 1.54 kWh</h1>
          <span className="ml-3 mt-2">net energy yesterday</span>
        </div>
      </Card>
    </div>
  );
};

const Analytics = () => {
  const [value, setValue] = useState(null);
  return (
    <div className="bg-[#161719] h-screen relative pt-8">
      <h1 className="ml-4 mb-4 text-white">Analytics</h1>
      <br />
      <DateInput
        className="w-4/5 mx-auto"
        value={value}
        onChange={(val) => {
          setValue(val);
          console.log(val);
        }}
        label="Pick date"
        placeholder="Date"
      />
      <br />
      <DynamicAreaChart data={[0, 0, 5, 22, 27, 0, 0]} />
    </div>
  );
};

const History = () => {
  return <div>History</div>;
};

export default function Home() {
  return (
    <div>
      <Fullpage />
    </div>
  );
}
