"use client";

import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function EventsPage() {

  const [events, setEvents] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(`
        *[_type == "event"]{
          _id,
          title,
          description,
          "images": images[].asset->url
        }
      `);
      setEvents(data);
    }

    fetchData();
  }, []);

  const open = (imgs: string[], i: number) => {
    setImages(imgs);
    setIndex(i);
  };

  const close = () => setImages([]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-black text-white">

      <Hero
        title="EVENTS"
        subtitle="Events & Competitions"
        image="/hero-contact.jpg"
      />

      <section className="custom-section">

        {events.map((event) => (

          <div key={event._id} className="custom-card">

            <h2 className="custom-title">{event.title}</h2>

            {event.images?.[0] && (
              <img
                src={event.images[0]}
                className="main-img"
                onClick={() => open(event.images, 0)}
              />
            )}

            <p className="custom-desc">{event.description}</p>

            <div className="custom-gallery">
              {event.images?.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => open(event.images, i)}
                />
              ))}
            </div>

          </div>

        ))}

      </section>

      {/* MODAL */}
      {images.length > 0 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={close}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          <img
            src={images[index]}
            className="max-h-[80vh] max-w-[90vw]"
          />

          <button onClick={prev} className="absolute left-6 text-3xl">‹</button>
          <button onClick={next} className="absolute right-6 text-3xl">›</button>

        </div>
      )}

    </div>
  );
}