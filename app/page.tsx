'use client';
import React, { useState } from 'react';
import { CheckCircle, TrendingUp, ArrowUpRight, Minus } from 'lucide-react';

type StoryKey = 'strategic' | 'operational' | 'delivery';

const stories: Record<StoryKey, {
  label: string;
  title: string;
  subtitle: string;
  tagline: string;
  problem: string;
  guide: string;
  experience: string[];
  plan: string[];
  cta: string;
  success: string;
  failure: string;
  stats: { label: string; value: string; context: string }[];
  caseStudy: { title: string; challenge: string; approach: string; outcome: string };
}> = {
  strategic: {
    label: '01 — Strategy',
    title: 'Strategic Leadership',
    subtitle: 'I align design with business outcomes and build organizational capability',
    tagline: 'Turning design from cost center to competitive advantage',
    problem: 'Your design team ships work, but design isn\'t driving business strategy. Leadership sees it as a service function, not a strategic partner. You need someone who can connect design decisions to revenue, retention, and market position.',
    guide: 'I\'ve transformed design from "make it pretty" to strategic business driver in organizations that actively resisted it',
    experience: [
      'Positioned design as solution to client attrition crisis—turned around 100% client retention through modernization',
      'Built frameworks that outlasted projects: UX principles, consulting guides, career paths that scaled beyond me',
      'Changed stakeholder perception through business-outcome workshops—made research tangible in research-hostile culture',
      'Partnered with product leadership to embed design in roadmap planning, not just execution',
    ],
    plan: [
      'Audit where design decisions impact business metrics—map design work to revenue, adoption, and retention',
      'Build bridges to executive leadership through their language: customer lifetime value, market differentiation, operational efficiency',
      'Create systems that make good design inevitable—principles, frameworks, and processes that scale',
    ],
    cta: 'Let\'s make design strategic',
    success: 'Design becomes a board-level conversation. Product roadmaps are co-created with design. Business outcomes improve measurably. Your team gets budget and headcount because leadership sees the ROI.',
    failure: 'Design remains tactical. Talented leaders leave for companies where design has real influence. Competitors with stronger design strategies win market share.',
    stats: [
      { label: 'Client Retention', value: '100%', context: 'Strategic design prevented attrition' },
      { label: 'SUS Score', value: '90', context: 'Business outcome, not vanity metric' },
      { label: 'Systems Built', value: '5+', context: 'Frameworks that scale beyond projects' },
    ],
    caseStudy: {
      title: 'Strategic Transformation at WTW',
      challenge: 'Legacy products bleeding clients in oligopolistic market. Design seen as cosmetic. No seat at strategic table.',
      approach: 'Built business case for design through client retention lens. Created UX principles that aligned with business goals. Ran workshops that made executives participants, not approvers.',
      outcome: 'Stopped client attrition. Achieved 100% adoption of modernized products. Design became embedded in product strategy, not just execution.',
    },
  },
  operational: {
    label: '02 — Operations',
    title: 'Management & Operations',
    subtitle: 'I build teams, processes, and systems that deliver consistently',
    tagline: 'Turning chaos into predictable, high-quality delivery',
    problem: 'Your design team is inconsistent. Projects miss deadlines. Quality varies wildly. Designers work in silos. You need operational excellence—someone who can build the team, processes, and rituals that make great work repeatable.',
    guide: 'I\'ve built design operations from scratch in resource-constrained, process-immature environments',
    experience: [
      'Led daily and weekly design team rituals—syncs, backlog refinements—that kept teams aligned and shipping',
      'Hired and onboarded 3 interns on annual cycle, partnered on internship program framework creation',
      'Wrote career framework for multiple UX discipline levels—gave team clear growth paths',
      'Created design system documentation and consulting guide—operationalized design knowledge',
      'Managed through significant disruption: team layoffs, budget constraints, aggressive timelines with unfamiliar technology',
    ],
    plan: [
      'Establish design operations fundamentals: intake, prioritization, capacity planning, quality standards',
      'Build team capability through hiring, onboarding, and clear career frameworks',
      'Create systems that capture and scale design knowledge—documentation, toolkits, templates',
    ],
    cta: 'Let\'s build operational excellence',
    success: 'Your team ships predictably. New hires ramp quickly. Quality is consistent. Designers have growth paths. Stakeholders trust commitments because you deliver.',
    failure: 'Projects continue to slip. Quality remains inconsistent. Top talent leaves for better-run teams. Stakeholders lose confidence and bypass design entirely.',
    stats: [
      { label: 'Team Growth', value: '3+', context: 'Hired, onboarded, developed' },
      { label: 'On-Time Delivery', value: '100%', context: 'Active enrollment success rate' },
      { label: 'Systems Created', value: '4', context: 'Career frameworks, guides, documentation' },
    ],
    caseStudy: {
      title: 'Building Design Operations at WTW',
      challenge: 'No design team structure. No process for Agile-embedded UX. Engineering unfamiliar with modern front-end. Product owners didn\'t know how to work with designers.',
      approach: 'Created daily/weekly rituals for team coordination. Built career framework spanning multiple levels. Documented everything—design system, consulting processes, UX principles. Hired and developed talent despite budget constraints.',
      outcome: 'Delivered 3 major products on time with 100% success rates. Team had clear growth paths. Design operations could scale beyond my direct involvement.',
    },
  },
  delivery: {
    label: '03 — Delivery',
    title: 'Design & Delivery',
    subtitle: 'I ship user-centered products that achieve measurable outcomes',
    tagline: 'From wireframes to 90+ SUS scores—I deliver work that matters',
    problem: 'Your team talks a good game but struggles to ship. Designs sit in Figma. Handoffs fail. What does ship doesn\'t meet user needs or business goals. You need someone who can do the work—research, design, delivery—and achieve real outcomes.',
    guide: 'I\'ve led end-to-end design delivery for three major products that achieved exceptional user satisfaction and business adoption',
    experience: [
      'Led ESS Next, Violet, and Plan Sponsor V1 & 2—major products from concept to launch',
      'Conducted research in hostile environment: recruited participants, moderated sessions, synthesized findings',
      'Led workshops that turned stakeholders into design partners: personas, design thinking, brainstorming',
      'Designed complex information architecture and interfaces for insurance/benefits domain',
      'Delivered creative direction that balanced AI innovation with client comfort in conservative industry',
      'Achieved 90 SUS sustained over 5 years—not just shipped, but shipped well',
    ],
    plan: [
      'Ground work in user research—recruit, test, synthesize—even when stakeholders resist',
      'Design iteratively with stakeholder collaboration—workshops, co-creation, continuous validation',
      'Ship with excellence: information architecture, UI design, and implementation support that ensures quality',
    ],
    cta: 'Let\'s ship something exceptional',
    success: 'Products launch with high user satisfaction. Adoption rates exceed targets. Users actually use what you build. Business metrics improve because the design works.',
    failure: 'Projects ship but fail to get adopted. User satisfaction remains mediocre. Redesigns become necessary. Competitors ship better experiences and win.',
    stats: [
      { label: 'Products Shipped', value: '3', context: 'Major initiatives from concept to launch' },
      { label: 'SUS Achievement', value: '90', context: 'Sustained over 5 years of use' },
      { label: 'User Adoption', value: '100%', context: 'Clients fully adopted new experiences' },
    ],
    caseStudy: {
      title: 'Delivering Excellence at WTW',
      challenge: 'Three major product initiatives in organization that avoided research, had no modern design practice, and faced aggressive timelines with unfamiliar AI technology.',
      approach: 'Led persona workshops and design thinking sessions to build stakeholder buy-in. Recruited and moderated user testing despite cultural resistance. Designed comprehensive IA and UI. Provided creative direction that balanced innovation with client comfort.',
      outcome: 'Shipped ESS Next, Violet, and Plan Sponsor products that achieved 90 SUS score, 100% client adoption, and sustained satisfaction over 5 years. Proved design delivery excellence in challenging environment.',
    },
  },
};

const storyKeys: StoryKey[] = ['strategic', 'operational', 'delivery'];

const PortfolioSite = () => {
  const [activeStory, setActiveStory] = useState<StoryKey>('strategic');
  const current = stories[activeStory];

  return (
    <div style={{ background: 'var(--ink)', color: 'var(--cream)', minHeight: '100vh' }}>

      {/* ── Nav ── */}
      <header style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="page-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          <span className="font-display" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
            Joshua Feig
          </span>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-muted)', fontWeight: 500 }}>
            Design Leader
          </span>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="page-inner hero-block">

          {/* Tabs */}
          <div className="tabs-row">
            {storyKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveStory(key)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeStory === key ? '2px solid var(--amber)' : '2px solid transparent',
                  color: activeStory === key ? 'var(--cream)' : 'var(--cream-muted)',
                  padding: '0.6rem 1.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {stories[key].label}
              </button>
            ))}
          </div>

          {/* Hero grid: title left, stats right */}
          <div className="grid-hero">
            <div>
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '1.25rem', fontWeight: 500 }}>
                {current.label}
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                {current.title}
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.65, maxWidth: '440px' }}>
                {current.subtitle}
              </p>
            </div>

            <div>
              {current.stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem 0',
                    borderTop: '1px solid var(--rule)',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cream-muted)', fontWeight: 500 }}>
                    {stat.label}
                  </span>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--amber)', lineHeight: 1, display: 'block' }}>
                      {stat.value}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--cream-muted)', letterSpacing: '0.03em' }}>
                      {stat.context}
                    </span>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--rule)' }} />
            </div>
          </div>

          {/* Tagline */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--rule)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ width: '2rem', height: '1px', background: 'var(--amber)', flexShrink: 0, display: 'block' }} />
            <p className="font-display" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', fontStyle: 'italic', color: 'var(--cream-muted)', fontWeight: 400 }}>
              {current.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section style={{ borderBottom: '1px solid var(--rule)', background: 'var(--ink-mid)' }}>
        <div className="page-inner section-block">
          <p className="section-eyebrow">The Problem</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.015em', maxWidth: '720px' }}>
            The Problem You&apos;re Facing
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: '680px' }}>
            {current.problem}
          </p>
        </div>
      </section>

      {/* ── Evidence ── */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="page-inner section-block">
          <p className="section-eyebrow">Proof of Work</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '0.75rem', letterSpacing: '-0.015em' }}>
            I&apos;ve Delivered These Results
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '600px' }}>
            {current.guide}
          </p>
          <div>
            {current.experience.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem 0',
                  borderTop: '1px solid var(--rule)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <CheckCircle style={{ width: '0.95rem', height: '0.95rem', color: 'var(--amber)', flexShrink: 0, marginTop: '0.25rem' }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.65 }}>
                  {item}
                </span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section style={{ borderBottom: '1px solid var(--rule)', background: 'var(--ink-mid)' }}>
        <div className="page-inner section-block">
          <p className="section-eyebrow">The Approach</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '2.5rem', letterSpacing: '-0.015em' }}>
            How I Work
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {current.plan.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem 0',
                  borderTop: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr',
                  gap: '1.25rem',
                  alignItems: 'start',
                }}
              >
                <span className="font-display" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--amber)', fontWeight: 700 }}>
                  0{idx + 1}
                </span>
                <p style={{ fontSize: '0.97rem', color: 'var(--cream-muted)', lineHeight: 1.7 }}>
                  {step}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="page-inner section-block">
          <p className="section-eyebrow">Case Study</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '2.5rem', letterSpacing: '-0.015em' }}>
            {current.caseStudy.title}
          </h2>
          <div className="grid-case-study">
            {[
              { label: 'Challenge', content: current.caseStudy.challenge },
              { label: 'Approach', content: current.caseStudy.approach },
              { label: 'Outcome', content: current.caseStudy.outcome },
            ].map(({ label, content }) => (
              <div key={label} style={{ borderTop: '2px solid var(--amber)', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {label}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75 }}>
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stakes ── */}
      <section style={{ borderBottom: '1px solid var(--rule)', background: 'var(--ink-mid)' }}>
        <div className="page-inner section-block">
          <div className="grid-stakes">
            <div style={{ borderTop: '2px solid var(--amber)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <TrendingUp style={{ width: '1rem', height: '1rem', color: 'var(--amber)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600 }}>
                  With Intentional Design
                </p>
              </div>
              <p style={{ fontSize: '0.97rem', color: 'var(--cream-muted)', lineHeight: 1.75 }}>
                {current.success}
              </p>
            </div>
            <div style={{ borderTop: '2px solid var(--rule-strong)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Minus style={{ width: '1rem', height: '1rem', color: 'var(--cream-muted)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-muted)', fontWeight: 600 }}>
                  Without Action
                </p>
              </div>
              <p style={{ fontSize: '0.97rem', color: 'var(--cream-muted)', lineHeight: 1.75, opacity: 0.65 }}>
                {current.failure}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="page-inner cta-block">
          <div className="grid-cta">
            <div>
              <p className="section-eyebrow">Let&apos;s Build Something</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Let&apos;s Work Together
              </h2>
              <p style={{ fontSize: '0.97rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '440px' }}>
                I bring proven {current.title.toLowerCase()} that delivers measurable business outcomes in challenging environments.
              </p>
            </div>
            <div>
              <button
                style={{
                  background: 'var(--amber)',
                  color: 'var(--ink)',
                  border: 'none',
                  padding: '0.9rem 1.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.85'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
              >
                {current.cta}
                <ArrowUpRight style={{ width: '0.85rem', height: '0.85rem' }} />
              </button>
            </div>
          </div>

          <div className="footer-bar">
            <span className="font-display" style={{ fontSize: '0.82rem', color: 'var(--cream-muted)', letterSpacing: '0.02em' }}>
              Joshua Feig · Design Leader
            </span>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cream-muted)', opacity: 0.45 }}>
              View case studies · Download résumé · Schedule a conversation
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioSite;