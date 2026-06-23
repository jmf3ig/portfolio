'use client';
import React, { useState } from 'react';
import { ChevronDown, CheckCircle, TrendingUp, Users, Target, Compass, Settings, Layers } from 'lucide-react';

const PortfolioSite = () => {
const [activeStory, setActiveStory] = useState<'strategic' | 'operational' | 'delivery'>('strategic');
  const stories = {
    'strategic': {
      icon: Compass,
      title: 'Strategic Leadership',
      subtitle: 'I align design with business outcomes and build organizational capability',
      tagline: 'Turning design from cost center to competitive advantage',
      problem: 'Your design team ships work, but design isn\'t driving business strategy. Leadership sees it as a service function, not a strategic partner. You need someone who can connect design decisions to revenue, retention, and market position.',
      guide: 'I\'ve transformed design from "make it pretty" to strategic business driver in organizations that actively resisted it',
      experience: [
        'Positioned design as solution to client attrition crisis—turned around 100% client retention through modernization',
        'Built frameworks that outlasted projects: UX principles, consulting guides, career paths that scaled beyond me',
        'Changed stakeholder perception through business-outcome workshops—made research tangible in research-hostile culture',
        'Partnered with product leadership to embed design in roadmap planning, not just execution'
      ],
      plan: [
        'Audit where design decisions impact business metrics—map design work to revenue, adoption, and retention',
        'Build bridges to executive leadership through their language: customer lifetime value, market differentiation, operational efficiency',
        'Create systems that make good design inevitable—principles, frameworks, and processes that scale'
      ],
      cta: 'Let\'s make design strategic',
      success: 'Design becomes a board-level conversation. Product roadmaps are co-created with design. Business outcomes improve measurably. Your team gets budget and headcount because leadership sees the ROI.',
      failure: 'Design remains tactical. Talented leaders leave for companies where design has real influence. Competitors with stronger design strategies win market share.',
      stats: [
        { label: 'Client Retention', value: '100%', context: 'Strategic design prevented attrition' },
        { label: 'SUS Score', value: '90', context: 'Business outcome, not vanity metric' },
        { label: 'Systems Built', value: '5+', context: 'Frameworks that scale beyond projects' }
      ],
      caseStudy: {
        title: 'Strategic Transformation at WTW',
        challenge: 'Legacy products bleeding clients in oligopolistic market. Design seen as cosmetic. No seat at strategic table.',
        approach: 'Built business case for design through client retention lens. Created UX principles that aligned with business goals. Ran workshops that made executives participants, not approvers.',
        outcome: 'Stopped client attrition. Achieved 100% adoption of modernized products. Design became embedded in product strategy, not just execution.'
      }
    },
    'operational': {
      icon: Settings,
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
        'Managed through significant disruption: team layoffs, budget constraints, aggressive timelines with unfamiliar technology'
      ],
      plan: [
        'Establish design operations fundamentals: intake, prioritization, capacity planning, quality standards',
        'Build team capability through hiring, onboarding, and clear career frameworks',
        'Create systems that capture and scale design knowledge—documentation, toolkits, templates'
      ],
      cta: 'Let\'s build operational excellence',
      success: 'Your team ships predictably. New hires ramp quickly. Quality is consistent. Designers have growth paths. Stakeholders trust commitments because you deliver.',
      failure: 'Projects continue to slip. Quality remains inconsistent. Top talent leaves for better-run teams. Stakeholders lose confidence and bypass design entirely.',
      stats: [
        { label: 'Team Growth', value: '3+', context: 'Hired, onboarded, developed' },
        { label: 'On-Time Delivery', value: '100%', context: 'Active enrollment success rate' },
        { label: 'Systems Created', value: '4', context: 'Career frameworks, guides, documentation' }
      ],
      caseStudy: {
        title: 'Building Design Operations at WTW',
        challenge: 'No design team structure. No process for Agile-embedded UX. Engineering unfamiliar with modern front-end. Product owners didn\'t know how to work with designers.',
        approach: 'Created daily/weekly rituals for team coordination. Built career framework spanning multiple levels. Documented everything—design system, consulting processes, UX principles. Hired and developed talent despite budget constraints.',
        outcome: 'Delivered 3 major products on time with 100% success rates. Team had clear growth paths. Design operations could scale beyond my direct involvement.'
      }
    },
    'delivery': {
      icon: Layers,
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
        'Achieved 90 SUS sustained over 5 years—not just shipped, but shipped well'
      ],
      plan: [
        'Ground work in user research—recruit, test, synthesize—even when stakeholders resist',
        'Design iteratively with stakeholder collaboration—workshops, co-creation, continuous validation',
        'Ship with excellence: information architecture, UI design, and implementation support that ensures quality'
      ],
      cta: 'Let\'s ship something exceptional',
      success: 'Products launch with high user satisfaction. Adoption rates exceed targets. Users actually use what you build. Business metrics improve because the design works.',
      failure: 'Projects ship but fail to get adopted. User satisfaction remains mediocre. Redesigns become necessary. Competitors ship better experiences and win.',
      stats: [
        { label: 'Products Shipped', value: '3', context: 'Major initiatives from concept to launch' },
        { label: 'SUS Achievement', value: '90', context: 'Sustained over 5 years of use' },
        { label: 'User Adoption', value: '100%', context: 'Clients fully adopted new experiences' }
      ],
      caseStudy: {
        title: 'Delivering Excellence at WTW',
        challenge: 'Three major product initiatives in organization that avoided research, had no modern design practice, and faced aggressive timelines with unfamiliar AI technology.',
        approach: 'Led persona workshops and design thinking sessions to build stakeholder buy-in. Recruited and moderated user testing despite cultural resistance. Designed comprehensive IA and UI. Provided creative direction that balanced innovation with client comfort.',
        outcome: 'Shipped ESS Next, Violet, and Plan Sponsor products that achieved 90 SUS score, 100% client adoption, and sustained satisfaction over 5 years. Proved design delivery excellence in challenging environment.'
      }
    }
  };

  const current = stories[activeStory as 'strategic' | 'operational' | 'delivery'];
  const Icon = current.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-8 flex gap-2 flex-wrap">
            {Object.keys(stories).map((key) => {
  const StoryIcon = stories[key as 'strategic' | 'operational' | 'delivery'].icon;
                return (
                <button
                  key={key}
                  onClick={() => setActiveStory(key)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all flex items-center gap-2 ${
                    activeStory === key
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <StoryIcon className="w-4 h-4" />
                  {stories[key].title}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4">{current.title}</h1>
              <p className="text-2xl text-slate-300 mb-2">{current.subtitle}</p>
              <p className="text-xl text-blue-300 italic">{current.tagline}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            {current.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-300 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Problem You're Facing</h2>
              <p className="text-xl text-slate-600 leading-relaxed">{current.problem}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Section */}
      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
              You
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">I've Delivered These Results</h2>
              <p className="text-xl text-slate-300 mb-6">{current.guide}</p>
              <div className="bg-slate-900 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">What I've Done:</h3>
                <ul className="space-y-3 text-slate-300">
                  {current.experience.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">How I Work</h2>
        <div className="grid gap-6">
          {current.plan.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-8 flex items-start gap-6">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-lg text-slate-700 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Case Study</h2>
          <div className="bg-white rounded-xl shadow-sm p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{current.caseStudy.title}</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Challenge</h4>
                <p className="text-lg text-slate-700">{current.caseStudy.challenge}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Approach</h4>
                <p className="text-lg text-slate-700">{current.caseStudy.approach}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Outcome</h4>
                <p className="text-lg text-slate-700">{current.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success & Failure Section */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900">Success Looks Like</h3>
              </div>
              <p className="text-lg text-green-800">{current.success}</p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <ChevronDown className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Without Actions</h3>
              </div>
              <p className="text-lg text-red-800">{current.failure}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-8">
            I bring proven {current.title.toLowerCase()} that delivers measurable business outcomes in challenging environments.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            {current.cta}
          </button>
          
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex items-center justify-center gap-4 text-slate-400">
              <Users className="w-5 h-5" />
              <span>View full case studies • Download résumé • Schedule a conversation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSite;