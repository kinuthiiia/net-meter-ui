import Image from "next/image";
import myGif from "../public/solaronly.gif";
import { Avatar, Badge, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import dynamic from "next/dynamic";

import ReactFullpage from "@fullpage/react-fullpage";

const DynamicAreaChart = dynamic(() => import("../components/areachart"), {
  loading: () => <p>Loading...</p>,
});

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Dashboard />
          </div>
          <div className="section">
            <Analytics />
          </div>
          <div className="section">
            <Notifications />
          </div>
          <div className="section">
            <Settings />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const Dashboard = () => {
  const [range, setRange] = useState([null, null]);

  return (
    <div>
      <div className="bg-[#161719] h-screen w-full">
        <div className="flex w-full p-8 justify-between">
          <div>
            <h1 className="text-white">Shagz</h1>
            <Badge variant="light" color="green">
              OFF GRID
            </Badge>
          </div>

          <Avatar size={40} color="green">
            SK
          </Avatar>
        </div>

        <DatePickerInput
          type="range"
          label="Period (default today) "
          placeholder="Pick dates range"
          value={range}
          onChange={setRange}
          mx="auto"
          className="w-4/5"
          maw={400}
        />

        <div className="relative mt-24">
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
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <div>
      <h1 className="ml-4">Analytics</h1>
      <DynamicAreaChart data={[0, 0, 5, 22, 27, 0, 0]} />
    </div>
  );
};

const Notifications = () => {
  return <div>notifications</div>;
};

const Settings = () => {
  return <div>settings</div>;
};

export default function Home() {
  return (
    <div>
      <Fullpage />
    </div>
  );
}
