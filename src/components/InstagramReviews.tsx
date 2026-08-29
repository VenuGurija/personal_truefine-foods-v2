"use client";

import { Bookmark, Heart, MessageCircle, Play, Send } from "lucide-react";
import { contact } from "@/data/site";

const instagramUrl = `https://instagram.com/${contact.instagram}`;

const posts = [
  {
    user: "trufinefoods",
    likes: "248",
    image: "/images/products/spinach-powder-study.jpg",
    avatar: "/brand/logo.png",
  },
  {
    user: "telangana.kitchens",
    likes: "1,204",
    image: "/images/products/beetroot-powder.png",
    avatar: "/images/products/beetroot-powder.png",
  },
  {
    user: "hyderabad.bakes",
    likes: "876",
    image: "/images/products/banana-powder.png",
    avatar: "/images/products/banana-powder.png",
  },
  {
    user: "savoury.works",
    likes: "532",
    image: "/images/products/onion-powder.jpg",
    avatar: "/images/products/onion-powder.jpg",
  },
  {
    user: "garden.to.jar",
    likes: "1,890",
    image: "/images/products/carrot-powder.jpg",
    avatar: "/images/products/carrot-powder.jpg",
  },
  {
    user: "leafandmill",
    likes: "643",
    image: "/images/products/moringa-leaf-powder.jpg",
    avatar: "/images/products/moringa-leaf-powder.jpg",
  },
  {
    user: "chityala.produce",
    likes: "419",
    image: "/images/brand/signboard.png",
    avatar: "/images/brand/launch.png",
  },
];

function Card({
  user,
  likes,
  image,
  avatar,
}: (typeof posts)[number]) {
  return (
    <article className="w-[250px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(26,20,16,0.08)]">
      <div className="flex items-center gap-2 px-3 py-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt=""
          className="h-8 w-8 rounded-full object-cover ring-1 ring-ink/10"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium leading-tight">{user}</p>
          <p className="text-[11px] leading-tight text-muted">Original audio</p>
        </div>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded bg-[#0095F6] px-2 py-1 text-[10px] font-semibold text-white"
        >
          View profile
        </a>
      </div>

      <a href={instagramUrl} target="_blank" rel="noreferrer" className="relative block aspect-[9/16] bg-ink/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`${user} Instagram post`} className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 pl-0.5 text-ink/80">
            <Play size={22} fill="currentColor" />
          </span>
        </span>
      </a>

      <div className="px-3 py-2.5">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[12px] font-medium text-[#0095F6]"
        >
          View more on Instagram
        </a>
        <div className="mt-2 flex items-center justify-between text-ink">
          <div className="flex items-center gap-3">
            <Heart size={18} />
            <MessageCircle size={18} />
            <Send size={18} />
          </div>
          <Bookmark size={18} />
        </div>
        <p className="mt-1.5 text-[12px] font-medium">{likes} likes</p>
      </div>
    </article>
  );
}

export function InstagramReviews() {
  return (
    <section className="overflow-hidden bg-[#f3efe6] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-serif text-4xl md:text-5xl">Follow our journey</h2>
        <p className="mt-3 text-center text-muted">
          Catch the process on Instagram{" "}
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-maroon">
            @{contact.instagram}
          </a>
        </p>
      </div>
      <div className="mt-10">
        <div className="insta-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-5 pr-5">
              {posts.map((post) => (
                <Card key={`${copy}-${post.user}`} {...post} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
