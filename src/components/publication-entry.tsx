"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Publication } from "@/data/publication";

const institutionLogos: Record<string, string> = {
  "DiDi Chuxing": "/logos/didi.png",
  "Hello Inc.": "/logos/halo.png",
  SJTU: "/logos/sjtu.png",
  "SenseTime Research": "/logos/sensetime.png",
  "Shanghai Jiao Tong University": "/logos/sjtu.png",
  "The Hong Kong Polytechnic University": "/logos/Poly.png",
  "The Hong Kong University of Science and Technology (Guangzhou)":
    "/logos/HKUST.png",
  "Texas A&M University": "/logos/Texas%20A%26M%20University.webp",
  "Tongji University": "/logos/tongji.png",
  "University of Michigan": "/logos/University%20of%20Michigan.webp",
};

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const venueLabel = [publication.conference, publication.year]
    .filter(Boolean)
    .join(" ");
  const authorParts = publication.authors?.split(/(Zhiwen Chen)/g);
  const normalizedStatus = publication.status?.toLowerCase();
  const statusStyles =
    publication.status === "Oral"
      ? "badge-shine badge-shine-amber bg-amber-100 text-amber-800 shadow-sm"
      : normalizedStatus === "accepted"
        ? "badge-shine badge-shine-emerald bg-emerald-100 text-emerald-800 shadow-sm"
        : "bg-blue-50 border-blue-100 text-blue-700";

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {publication.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <Image
            src={publication.imageUrl}
            alt={publication.title}
            width={160}
            height={200}
            className="rounded-lg transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          {venueLabel && <p className="text-xs text-zinc-500">{venueLabel}</p>}
          {publication.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {publication.award}
              </p>
            </div>
          )}
          {publication.rank && (
            <div className="badge-shine badge-shine-rose px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 shadow-sm">
              <p className="text-xs font-bold tracking-wide">
                {publication.rank}
              </p>
            </div>
          )}
          {publication.status && (
            <div className={`px-2 py-1 rounded-md border ${statusStyles}`}>
              <p className="text-xs font-semibold">{publication.status}</p>
            </div>
          )}
        </div>
        {publication.detailImageUrl ? (
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="group mb-3 flex w-full items-start gap-2 text-left font-serif text-md text-zinc-900 transition-colors hover:text-zinc-600"
            aria-expanded={isExpanded}
          >
            <span className="underline decoration-zinc-300 decoration-1 underline-offset-4 transition-colors group-hover:decoration-zinc-700">
              {publication.title}
            </span>
            <ChevronDown
              size={16}
              className={`mt-1 flex-shrink-0 text-zinc-400 transition-transform duration-300 group-hover:text-zinc-700 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <h3 className="font-serif text-md mb-3">{publication.title}</h3>
        )}

        {publication.detailImageUrl && isExpanded && (
          <div className="mb-4">
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
              <Image
                src={publication.detailImageUrl}
                alt={`${publication.title} overview`}
                width={2048}
                height={789}
                className="h-auto w-full"
              />
            </div>
            {publication.abstract && (
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                <span className="font-semibold text-zinc-600">Abstract: </span>
                {publication.abstract}
              </p>
            )}
          </div>
        )}

        {/* Collaborating Institutions */}
        {publication.institutions && publication.institutions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {publication.institutions.map((institution, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 rounded-full border border-orange-200 shadow-sm"
              >
                {institutionLogos[institution] ? (
                  <Image
                    src={institutionLogos[institution]}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 flex-shrink-0 rounded-full object-contain"
                  />
                ) : (
                  <span className="h-4 w-4 flex-shrink-0 rounded-full bg-orange-200 text-[10px] leading-4 text-orange-700">
                    {institution.charAt(0)}
                  </span>
                )}
                <span>{institution}</span>
              </span>
            ))}
          </div>
        )}

        {publication.authors && (
          <p className="text-sm text-zinc-600 mb-4">
            {authorParts?.map((part, index) =>
              part === "Zhiwen Chen" ? (
                <strong key={index} className="font-semibold text-zinc-800">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        )}
        <div className="flex flex-row gap-6">
          {publication.paperUrl && (
            <a
              href={publication.paperUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Paper</span>
            </a>
          )}
          {publication.codeUrl && (
            <a
              href={publication.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
          {publication.bibtex && (
            <a
              href={publication.bibtex}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          )}
        </div>
        {publication.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {publication.tldr}
          </p>
        )}
      </div>
    </div>
  );
}
