import { useEffect, useState } from "react";
import Cards from "./Cards";
import type EventCardData from "../entities/EventCard";

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<EventCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          console.error("Failed to fetch events", res.status);
          return;
        }

        const data: EventCardData[] = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Network error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="cards text-gray-500 dark:text-gray-400">
        Loading...
      </section>
    );
  }

  return (
    <section className="cards">
      <div className="flex flex-wrap gap-6">
        {events.map((ev) => (
          <Cards key={ev.id} event={ev} />
        ))}
      </div>
    </section>
  );
};

export default EventsList;
