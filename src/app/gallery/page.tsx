import { GalleryGrid } from "@/components/sections/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <section className="gradient-navy pt-28 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto">
            A visual journey through our workshop, repairs, deliveries, and marine projects.
          </p>
        </div>
      </section>
      <GalleryGrid />
    </>
  );
}
