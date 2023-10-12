import Image from "next/image";
import myGif from "../public/solaronly.gif";
import { Avatar, Badge } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import {
  IconHome,
  IconAdjustments,
  IconChartAreaLine,
  IconNotification,
  IconChartSankey,
  IconMessageDots,
} from "@tabler/icons";

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

        <Image src={myGif} alt="my gif" height={500} width={500} />
      </div>
    </div>
  );
};

const Analytics = () => {
  return <div>analytics</div>;
};

const Notifications = () => {
  return <div>notifications</div>;
};

const Settings = () => {
  return <div>settings</div>;
};

const sections = [
  {
    key: "1",
    icon: <IconHome />,
    component: <Dashboard />,
  },
  {
    key: "2",
    icon: <IconChartSankey />,
    component: <Analytics />,
  },
  {
    key: "3",
    icon: <IconMessageDots />,
    component: <Notifications />,
  },
  {
    key: "4",
    icon: <IconAdjustments />,
    component: <Settings />,
  },
];

export default function Home() {
  return (
    <div>
      <BottomNavigation sections={sections} activeColor="green" />
    </div>
  );
}
