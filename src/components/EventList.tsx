import { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import type EventCardData from "../entities/EventCard";

interface Props {
  searchText: string;
}

const EventsList: React.FC<Props> = ({ searchText }) => {
  const [events, setEvents] = useState<EventCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          console.error("Failed to fetch events", res.status);
          setError(`Failed to fetch events (HTTP ${res.status})`);
          return;
        }

        const data: EventCardData[] = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Network error:", err);
        setError("Network error while loading events");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const filtered = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return events;
    return events.filter((ev) => ev.title.toLowerCase().includes(q));
  }, [events, searchText]);

  if (loading) {
    return (
      <section className="cards text-gray-500 dark:text-gray-400">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="cards text-red-600 dark:text-red-400">
        {error}
      </section>
    );
  }

  return (
    <section className="max-w-[1240px] mx-auto cards">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[16px] justify-items-center">
        {filtered.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400 text-6xl text-center w-full col-span-3">
            No webinars found.
          </div>
        ) : (
          filtered.map((ev) => <Cards key={ev.id} event={ev} />)
        )}
      </div>
    </section>
  );
};

export default EventsList;
