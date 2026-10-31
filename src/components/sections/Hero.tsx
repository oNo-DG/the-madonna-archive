"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type MouseEvent } from "react";

const modules = [
  {
    number: "01", href: "/media", eyebrow: "MEDIA ARCHAEOLOGY", title: "媒介考古",
  },
  {
    number: "02", href: "/timeline", eyebrow: "MEMORY REVISITED", title: "时间回放",
  },
  {
    number: "03", href: "/archive", eyebrow: "THE LIVING ARCHIVE", title: "动态档案",
  },
];

export function Hero() {
  const router = useRouter();
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [isDropping, setIsDropping] = useState(false);

  function chooseTrack(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
    setSelectedTrack(href);
    setIsDropping(true);
    navigationTimer.current = setTimeout(() => router.push(href), 520);
  }

  const trackClass = selectedTrack
    ? ` track-${modules.findIndex((module) => module.href === selectedTrack) + 1}`
    : "";

  return (
    <section
      id="top"
      className={`record-home${trackClass}${isDropping ? " is-dropping" : ""}`}
    >
      <div className="record-home-meta">
        <span>ARCHIVE NO. 007</span>
        <span>PLAYING / MEMORY</span>
      </div>

      <div className="record-packaging" aria-hidden="true">
        <span className="packaging-spine">THE MADONNA ARCHIVE · MEDIA / MEMORY · FILE 007</span>
        <span className="packaging-sticker">STEREO<br />33⅓ RPM</span>
        <span className="packaging-note">PROPERTY OF<br />MEMORY UNIT</span>
      </div>

      <div className="madonna-memory-wall" aria-hidden="true">
        <div className="memory-frame memory-frame-one">
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} loading="eager" />
        </div>
        <div className="memory-frame memory-frame-two">
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} loading="eager" />
        </div>
        <div className="memory-frame memory-frame-three">
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} loading="eager" />
        </div>
      </div>

      <div className="record-object" aria-label="黑胶唱片与档案封套主视觉">
        <div className="record-cover" aria-hidden="true">
          <span className="cover-kicker">MEDIA<br />&amp; MEMORY</span>
          <div className="cover-content">
            <span className="cover-file">FILE 007 / RESEARCH ARCHIVE</span>
            <p className="cover-question">
              当明星、粉丝与时代<br />一起变老，<br />我们究竟在怀念谁？
            </p>
            <dl className="cover-metadata">
              <div><dt>SUBJECT</dt><dd>MADONNA</dd></div>
              <div><dt>PERIOD</dt><dd>1984—2010</dd></div>
              <div><dt>THEMES</dt><dd>CELEBRITY · AGEING<br />FAN NOSTALGIA</dd></div>
            </dl>
          </div>
          <span className="cover-source">MEDIA AND MEMORY · CH. 07 · PP. 120—135</span>
          <span className="cover-stamp">ARCHIVE<br />COPY</span>
          <span className="cover-barcode" />
          <span className="cover-tape" />
          <i>07</i>
        </div>
        <span className="record-echo-disc" aria-hidden="true" />
        <div className="record-disc-stage">
          <Image
            className="record-disc"
            src="/images/hero-vinyl.png"
            alt="磨损黑胶唱片，唱片中心为八十年代流行文化风格的麦当娜肖像"
            width={1200}
            height={1200}
            priority
          />
          <div className="record-grooves" aria-hidden="true">
            <span className="groove groove-one" />
            <span className="groove groove-two" />
            <span className="groove groove-three" />
          </div>
        </div>

        <div className="turntable-arm" aria-hidden="true">
          <span className="tonearm-base"><i /></span>
          <span className="tonearm-pivot" />
          <span className="tonearm-assembly">
            <i className="tonearm-weight" />
            <i className="tonearm-bar" />
            <i className="tonearm-head"><b /></i>
          </span>
        </div>
      </div>

      <div className="record-interface">
        <div className="record-home-title">
          <span>NOW PLAYING</span>
          <h1>THE MADONNA ARCHIVE</h1>
          <p>CELEBRITY · AGEING · FAN NOSTALGIA</p>
          <p className="record-home-summary">一座关于名人、衰老与粉丝怀旧的互动记忆档案。</p>
        </div>

        <nav
          className="record-entry-menu"
          aria-label="选择互动模块"
          onMouseLeave={() => !isDropping && setSelectedTrack(null)}
        >
            <span className="entry-menu-label">SELECT AN ARCHIVE TRACK / 选择档案轨道</span>
            {modules.map((module) => (
              <Link
                className="record-entry"
                href={module.href}
                key={module.href}
                onMouseEnter={() => !isDropping && setSelectedTrack(module.href)}
                onFocus={() => !isDropping && setSelectedTrack(module.href)}
                onBlur={() => !isDropping && setSelectedTrack(null)}
                onClick={(event) => chooseTrack(event, module.href)}
                aria-label={`${module.number} ${module.title} ${module.eyebrow}`}
              >
                <span>{module.number}</span>
                <i aria-hidden="true" />
                <strong>{module.title}</strong>
                <small>{module.eyebrow}</small>
              </Link>
            ))}
        </nav>
      </div>
    </section>
  );
}
