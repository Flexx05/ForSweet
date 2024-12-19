import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Homepage";
import GiftAdd from "./pages/GiftAdd";
import GiftEdit from "./pages/GiftEdit";
import DateAdd from "./pages/DateAdd";
import DateEdit from "./pages/DateEdit";
import { useRoutes } from "react-router-dom";
import "@fontsource/lily-script-one";
import { useEffect, useState } from "react";
import DateList from "./pages/DateList";

function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/gift/add",
      element: <GiftAdd />,
    },
    {
      path: "/gift/edit/:id",
      element: <GiftEdit />,
    },
    {
      path: "/date/add",
      element: <DateAdd />,
    },
    {
      path: "/date/edit/:id",
      element: <DateEdit />,
    },
    {
      path: "/date/list",
      element: <DateList />,
    },
  ];

  const element = useRoutes(routes);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState("");
  const vnFormat = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return `${dd} ~ ${mm} ~ ${yyyy}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Cập nhật mỗi giây

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    setDayOfWeek(days[today.getDay()]);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <nav className=" bg-[#FFA1C8]">
        <div className="container flex justify-between align-items-center">
          <a className="navbar-brand" href="/">
            <img src="../images/FS-logo.png" alt="" />
          </a>
          <p className="text-[30px] text-white lily-script-one">
            {dayOfWeek}, {vnFormat(currentTime)}
          </p>
        </div>
      </nav>
      <p className="lily-script-one text-[#F06BA3] text-[45px] text-center pt-[50px] bg-[#FFF4E5]">
        Love is composed of a single soul inhabiting two bodies
      </p>
      <div className="bg-[#FFF4E5]">{element}</div>
      <Toaster />
    </main>
  );
}

export default App;
