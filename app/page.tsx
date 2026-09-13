"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Layers,
  Mail,
  Search,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import Reveal from "../components/Reveal";
import AnimatedLottie from "../components/AnimatedLottie";
import ProjectExplorer from "../components/ProjectExplorer";
import ThemeToggle from "../components/ThemeToggle";
import CommandPalette from "../components/CommandPalette";
import DesktopCursor from "../components/DesktopCursor";
import ScrollProgress from "../components/ScrollProgress";
import MobileNav from "../components/MobileNav";
import LoadingScreen from "../components/LoadingScreen";
import RefreshToHome from "../components/RefreshToHome";
import ActiveNav from "../components/ActiveNav";
import { capabilityGroups, process, proficiency, projects, profile, socialLinks, technologyLogos } from "../data/portfolio";

const socials = [
  { label: "GitHub", href: socialLinks.github, icon: "/assets/images/social/github.svg" },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: "/assets/images/social/linkedin.svg" },
  { label: "Instagram", href: socialLinks.instagram, icon: "/assets/images/social/instagram.svg" },
  { label: "Facebook", href: socialLinks.facebook, icon: "/assets/images/social/facebook.svg" },
  { label: "Email", href: socialLinks.email ? `mailto:${socialLinks.email}` : "#contact", icon: "/assets/images/social/mail.svg", isEmail: true },
];

function Socials({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`socials ${compact ? "socials-compact" : ""}`} aria-label="Social links">
      {socials.map(({ label, href, icon, isEmail }) => (
        <a
          key={label}
          href={href || "#contact"}
          aria-label={href && href !== "#contact" ? label : `${label} — details in contact section`}
          target={!isEmail && href && href !== "#contact" ? "_blank" : undefined}
          rel={!isEmail && href && href !== "#contact" ? "noreferrer" : undefined}
          className={(!href || href === "#contact") ? "is-placeholder" : ""}
        >
          <img className={`social-logo ${label === "GitHub" ? "social-logo-github" : ""}`} src={icon} alt="" width={15} height={15} />
          {!compact ? <span>{label}</span> : null}
        </a>
      ))}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow ? <div className="section-label"><span>{eyebrow}</span><i /></div> : null}
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

const workflowMeta = [
  { label: "UNDERSTAND", note: "problem", Icon: Search },
  { label: "REDUCE", note: "signal", Icon: Target },
  { label: "BUILD", note: "prototype", Icon: Wrench },
  { label: "REFINE", note: "system", Icon: Sparkles },
];

const capabilityIcons = [Layers, Sparkles, Search, Compass];

export default function Page() {

  return (
    <div className="site-shell">
      <LoadingScreen />
      <RefreshToHome />
      <ScrollProgress />
      <DesktopCursor />
      <CommandPalette />

      <header className="site-header">
        <div className="header-inner">
          <Link href="#top" className="header-name" aria-label="Ramjan Ali home">
            <span className="header-bracket">&lt;</span><span>Ramjan Ali</span><span className="header-bracket">/&gt;</span>
          </Link>
          <ActiveNav />
          <div className="header-actions">
            <button type="button" className="command-trigger" aria-label="Open navigation palette (Ctrl K)" onClick={() => window.dispatchEvent(new Event("ramjan:command"))}>
              <span className="command-symbol" aria-hidden="true">⌘</span><span className="command-slash">/</span><span className="command-key">CTRL K</span>
            </button>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section-inner">
          <div className="hero-copy">
            <Reveal delay={0.05}>
              <h1>{profile.greeting}<span className="hero-wave" aria-hidden="true"> {profile.wave}</span></h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="hero-headline">{profile.headline}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="hero-description">{profile.intro}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="hero-socials">
                <Socials compact />
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="hero-actions">
                <Link className="button button-primary" href="#contact">Contact me</Link>
                <Link className="button button-ghost" href="#projects">View my work</Link>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <span className="hero-note"><span className="availability-dot" aria-hidden="true" />Available for selected builds</span>
            </Reveal>
          </div>

          <Reveal delay={0.12} direction="right">
            <div className="hero-visual-wrap" aria-label="Animated overview of software, AI, data and interfaces">
              <div className="hero-lottie"><AnimatedLottie source="landingPerson" priority /></div>
            </div>
          </Reveal>
        </section>

        <section id="capabilities" className="section soft-section">
          <div className="section-inner">
            <div className="capability-layout">
              <Reveal direction="left"><div className="capability-illustration"><AnimatedLottie source="codingPerson" /></div></Reveal>
              <Reveal direction="right">
                <div className="capability-content">
                  <div className="section-label"><span>02 / WHAT I DO</span><i /></div>
                  <h2>What I do</h2>
                  <p className="capability-subtitle">A full-stack developer who moves across software, AI and data and enjoys exploring every layer of the stack.</p>
                  <div className="capability-tech-row" aria-label="Core technologies">
                    {technologyLogos.slice(0, 8).map((tech) => (
                      <span key={tech.label} className="capability-tech-icon" title={tech.label}>
                        <img src={tech.icon} alt={tech.label} loading="lazy" decoding="async" />
                      </span>
                    ))}
                  </div>
                  <ul className="capability-points">
                    {capabilityGroups.map((item, index) => {
                      const Icon = capabilityIcons[index];
                      return (
                        <li key={item.title}>
                          <span className="capability-point-icon" aria-hidden="true"><Icon size={13} strokeWidth={2} /></span>
                          <span><strong>{item.title}.</strong> {item.body}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Section id="education" eyebrow="03 / EDUCATION" title="A computer science foundation, strengthened by building things for real." className="soft-section">
          <div className="education-list">
            <Reveal direction="left">
              <article className="education-card">
                <div className="education-card-crest education-card-crest-official">
                  <img
                    src="https://img.gothru.org/1422/246084474034958437/overlay/assets/20220815144405.diSezo.png?save=optimize"
                    alt="The Assam Kaziranga University official logo"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="education-card-body">
                  <h3>The Assam Kaziranga University</h3>
                  <p className="education-card-degree">B.Tech in Computer Science &amp; Engineering</p>
                  <p className="education-card-period">2022 — 2026 · Jorhat, Assam</p>
                  <p className="education-card-note">Coursework centered on programming, algorithms, databases, systems and core software engineering fundamentals.</p>
                  <ul className="education-card-bullets">
                    <li>Applied classroom learning directly to product interfaces, AI/ML experiments and data-driven project work.</li>
                    <li>Balanced academic foundations with independent, real-world software builds throughout the program.</li>
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>
        </Section>

        <Section id="range" eyebrow="04 / PROFICIENCY" title="Proficiency" className="soft-section">
          <div className="range-grid-reference">
            <Reveal direction="left">
              <div className="proficiency-bars">
                {proficiency.map((item, index) => (
                  <div className="proficiency-row" key={item.label} style={{ animationDelay: `${index * 90}ms` }}>
                    <div className="proficiency-row-top"><span>{item.label}</span><strong>{item.value}%</strong></div>
                    <span className="proficiency-track"><i style={{ width: `${item.value}%` }} /></span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="range-frameless-visual range-old-lottie" aria-label="Animated build and proficiency illustration">
                <AnimatedLottie source="build" />
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="projects" eyebrow="05 / SELECTED WORK" title="Six focused builds: Each one a different kind of technical problem." className="section-projects">
          <Reveal><ProjectExplorer projects={projects} /></Reveal>
        </Section>

        <Section id="process" eyebrow="06 / HOW I WORK" title="A simple loop: Understand, Reduce, Build, Refine." className="soft-section">
          <Reveal>
            <div className="process-flow" aria-label="Ramjan working process">
              <div className="process-flow-line" aria-hidden="true"><span /></div>
              {process.map((item, index) => {
                const Icon = workflowMeta[index].Icon;
                return (
                  <article key={item.step} className={`process-flow-step process-flow-step-${index + 1}`}>
                    <div className="process-flow-step-top">
                      <span className="process-flow-icon" aria-hidden="true"><Icon size={16} strokeWidth={1.8} /></span>
                      <small>{workflowMeta[index].label}</small>
                    </div>
                    <span className="process-flow-num">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="process-flow-footer"><span>{workflowMeta[index].note}</span><ArrowUpRight size={13} /></div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </Section>

        <Section id="contact" eyebrow="07 / NEXT" title="Let's build something worth showing people.">
          <div className="contact-panel-old">
            <div className="contact-copy">
              <span className="mini-label">SOFTWARE · AI · DATA · PRODUCT</span>
              <h3>Bring me a problem, an idea, or a rough direction.</h3>
              <p>I'm interested in thoughtful products, experiments that teach something, and collaborations where good engineering can make the experience clearer.</p>
              <div className="contact-actions">
                <a className="contact-primary" href={socialLinks.email ? `mailto:${socialLinks.email}` : "#contact"}><Mail size={16} /> {socialLinks.email ? "Email Ramjan" : "Add your email"} <ArrowUpRight size={15} /></a>
                <Socials />
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-orbit orbit-a" />
              <div className="contact-orbit orbit-b" />
              <strong>OPEN<br />TO<br />GOOD<br />PROBLEMS.</strong>
              <span className="contact-next-build">Let's see what the next build teaches us.</span>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand"><span className="footer-signature">Ramjan Ali</span><span>Software · AI · Data</span></div>
          <nav aria-label="Footer navigation"><Link href="#top">Home</Link><Link href="#capabilities">What I do</Link><Link href="#education">Education</Link><Link href="#range">Proficiency</Link><Link href="#projects">Selected Work</Link><Link href="#process">How I work</Link><Link href="#contact">Contact</Link></nav>
          <Link href="#top" className="back-top">Back to top <ArrowUpRight size={14} /></Link>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Ramjan Ali</span><span>I build things, learn from them, and keep going.</span><span className="footer-status"><i /> SYSTEM ONLINE</span></div>
      </footer>
    </div>
  );
}
