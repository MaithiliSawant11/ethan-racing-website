"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

export default function AchievementsUI({ achievements, legacyImages }: any) {

  const [activeTab, setActiveTab] = useState("achievements");

  // 🔥 GALLERY STATE
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openGallery = (imgs: string[], i: number) => {
    setGalleryImages(imgs);
    setIndex(i);
  };

  const closeGallery = () => setGalleryImages([]);

  const next = () => {
    setIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-black text-white">

      <Hero
        title="ACHIEVEMENTS"
        subtitle="Milestones and legacy of Ethan Racing"
        image="/hero_achievements.jpg"
      />

      <section className="custom-section">

        {/* BUTTONS */}
        <div className="custom-tabs">

          <button
            className={activeTab === "achievements" ? "active" : ""}
            onClick={() => setActiveTab("achievements")}
          >
            Achievements
          </button>

          <button
            className={activeTab === "legacy" ? "active" : ""}
            onClick={() => setActiveTab("legacy")}
          >
            Team Legacy
          </button>

        </div>

        {/* ACHIEVEMENTS */}
        {activeTab === "achievements" && (

          achievements.map((item: any) => {

            // ✅ HANDLE BOTH image / images
            const imgs = item.images?.length
              ? item.images
              : item.image
              ? [item.image]
              : [];

            return (
              <div key={item._id} className="custom-card">

                <h2 className="custom-title">{item.title}</h2>

                {/* MAIN IMAGE */}
                {imgs.length > 0 && (
                  <img
                    src={imgs[0]}
                    className="main-img"
                    onClick={() => openGallery(imgs, 0)}
                  />
                )}

                <p className="custom-desc">{item.description}</p>

                {/* 🔥 GALLERY THUMBNAILS */}
                {imgs.length > 1 && (
                  <div className="custom-gallery">
                    {imgs.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        onClick={() => openGallery(imgs, i)}
                      />
                    ))}
                  </div>
                )}

                <p className="text-gray-400 text-xs mt-2">
                  {item.year} • {item.category}
                </p>

              </div>
            );
          })

        )}

        {/* LEGACY */}
        {activeTab === "legacy" && (

          legacyImages.map((img: any) => (

            <div key={img._id} className="custom-card">
              {img.image && (
                <img src={img.image} className="main-img" />
              )}
            </div>

          ))

        )}

      </section>

      {/* 🔥 FULLSCREEN GALLERY MODAL */}
      {galleryImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          <img
            src={galleryImages[index]}
            className="max-h-[80vh] max-w-[90vw]"
          />

          <button onClick={prev} className="absolute left-6 text-3xl">‹</button>
          <button onClick={next} className="absolute right-6 text-3xl">›</button>

        </div>
      )}

    </div>
  );
}