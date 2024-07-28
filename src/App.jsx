import { WonderPush } from "react-wonderpush";

import EventList from "./components/EventList";
import SwitchButton from "./components/SwitchButton";
import "./App.css";
import UserIdManager from "./components/UserIdManager";

const App = () => {
  const notificationDefaultUrl =
    import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL;
  const webKey = import.meta.env.VITE_WEBKEY;
  const applicationName = import.meta.env.VITE_APPLICATION_NAME;

  return (
    <div className="App">
      <WonderPush
        options={{
          webKey,
          applicationName,
          notificationDefaultUrl,
          notificationIcon: "../logo.png",
        }}
      >
        <h1>Imo Push Web with WonderPush</h1>
        <SwitchButton />
        <UserIdManager />
        <h2>Simulate an event</h2>
        <p>Send your custom events that occurs in your app to wonderpush</p>
        <EventList />
      </WonderPush>
      ;
    </div>
  );
};

export default App;
