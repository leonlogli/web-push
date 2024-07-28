import EventToTrack from "./EventToTrack";

const lookupEvents = {
  firstVisit: "First Visit",
  newsRead: "News Read",
  gameOver: "Game Over",
  like: "Like",
  addToCart: "Add To Cart",
  purchase: "Purchase",
  nearEiffelTower: "Near Eiffel Tower",
  nearLouvre: "Near Louvre",
  inactiveUser: "Inactive User",
};

export default function EventList() {
  return (
    <div id="EventList">
      {Object.keys(lookupEvents).map((event, i) => {
        return <EventToTrack key={i} event={event} dictionary={lookupEvents} />;
      })}
    </div>
  );
}
