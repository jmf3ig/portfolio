# Portfolio Role-Specific Tailoring Implementation

## Overview
Implement URL parameter system to support role-specific tailoring while maintaining a single generic landing page.

**Implementation:** URL parameter `?role=[role-name]` changes the Problem statement, Fit section, and header without rebuilding or redeploying.

---

## Technical Approach

### URL Parameters
- `joshuafeig.com` → Generic Design Leadership (default)
- `joshuafeig.com?role=netflix-identity` → Netflix Identity version
- `joshuafeig.com?role=stripe-payments` → Stripe Payments version (future)
- `joshuafeig.com?role=generic` → Explicit generic version

### What Changes Per Role
Only these sections change:
1. **Header subtitle** (right side of navbar)
2. **Problem statement** (Netflix's Challenge section)
3. **Fit section** (How This Maps to [Company] Role)
4. **CTA button text** (Let's build X together)

### What Stays the Same
- All three story buttons (Strategic, Operational, Delivery)
- Experience bullets
- Plan section
- Stats
- Success/Failure sections
- Overall design/styling

---

## Implementation Steps

### Step 1: Create Role Config Object
In `app/page.tsx`, add a new object at the top of the component (before `stories`):

```javascript
const roleConfigs = {
  'generic': {
    headerSubtitle: 'Senior Product Designer',
    companyName: 'JOSHUA FEIG',
    problemTitle: 'Your Design Challenge',
    problemText: 'You need a design leader who can build strategy in ambiguity, maintain craft under constraints, and solve inherently complex problems. Someone who connects design decisions to business outcomes and empowers teams to make good decisions independently.',
    fitTitle: 'Why This Works',
    fitIntro: 'My experience solving design challenges across complex, constraint-rich environments:',
    fitPoints: [
      'I thrive in ambiguity—turning undefined problems into strategic direction',
      'I maintain quality and consistency even under resource constraints',
      'I design solutions to complex problems with competing stakeholder needs',
      'I connect design work to business outcomes and measurable impact'
    ],
    ctaText: 'Let\'s build something great together'
  },
  'netflix-identity': {
    headerSubtitle: 'Senior Product Designer, Identity',
    companyName: 'NETFLIX',
    problemTitle: 'Netflix\'s Challenge',
    problemText: 'You need someone to own multiple interconnected identity, access, and account initiatives—but the requirements are still evolving. There\'s no perfect solution yet. You need a designer who can structure ambiguous, high-constraint problems (privacy, legal, global regulations, technical systems) and propose holistic solutions that Netflix leadership can commit to.',
    fitTitle: 'How This Maps to Netflix Identity Role',
    fitIntro: 'Netflix\'s job description requires:',
    fitPoints: [
      'Netflix needs someone comfortable with "evolving systems and requirements"—you thrive there',
      'Identity is full of constraints (privacy, legal, consent, regulations)—you excel at using constraints as design inputs',
      'Identity decisions affect trust, adoption, and global compliance—you understand how design connects to business strategy',
      'Netflix leadership will ask "why," not "how"—you build defensible strategies that stakeholders want to partner on'
    ],
    ctaText: 'Let\'s build identity strategy that scales'
  },
  'stripe-payments': {
    headerSubtitle: 'Senior Product Designer, Payments',
    companyName: 'STRIPE',
    problemTitle: 'Stripe\'s Challenge',
    problemText: 'You need someone to design mission-critical payment flows that handle global transactions, regulatory compliance, and competing stakeholder needs. Payment design isn\'t forgiving—errors cost money and trust. You need a designer who maintains a high bar for craft, consistency, and implementation quality even when everything\'s pulling in different directions.',
    fitTitle: 'How This Maps to Stripe Payments Role',
    fitIntro: 'Stripe\'s payments challenges require:',
    fitPoints: [
      'Payment flows are mission-critical—you understand zero-tolerance for error',
      'Global payments involve regulatory, legal, and technical constraints—constraints are your design input',
      'Users need to trust the payment experience—you prioritize craft and consistency',
      'Implementation must be flawless—you collaborate relentlessly with engineering on quality'
    ],
    ctaText: 'Let\'s build payment experiences users trust'
  }
};
```

### Step 2: Get URL Parameter in Component
Add this hook at the top of your component (after `const [activeStory, setActiveStory]`):

```javascript
const [role, setRole] = React.useState('generic');

React.useEffect(() => {
  // Get role from URL parameter
  const params = new URLSearchParams(window.location.search);
  const roleParam = params.get('role') || 'generic';
  
  // Validate role exists, otherwise default to generic
  if (roleConfigs[roleParam]) {
    setRole(roleParam);
  } else {
    setRole('generic');
  }
}, []);

// Get current config
const config = roleConfigs[role];
```

### Step 3: Update Header Section
Replace the Netflix header with dynamic version:

```jsx
<div className="bg-black border-b border-red-600 py-4">
  <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
    <div className="text-red-600 font-bold text-2xl">{config.companyName}</div>
    <div className="text-slate-400 text-sm">{config.headerSubtitle}</div>
  </div>
</div>
```

### Step 4: Update Problem Section
Replace problem section with:

```jsx
<div className="bg-slate-800 border-y border-slate-700 py-16">
  <div className="max-w-5xl mx-auto px-6">
    <div className="flex items-start gap-4 mb-6">
      <Lock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">{config.problemTitle}</h2>
        <p className="text-xl text-slate-300 leading-relaxed">{config.problemText}</p>
      </div>
    </div>
  </div>
</div>
```

### Step 5: Update Netflix Fit Section
Replace the fit section with:

```jsx
<div className="max-w-5xl mx-auto px-6 py-16">
  <div className="bg-slate-800 border border-red-600 rounded-xl p-10">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
      {config.fitTitle}
    </h3>
    {config.fitIntro && (
      <p className="text-slate-300 mb-4">{config.fitIntro}</p>
    )}
    <ul className="space-y-4">
      {config.fitPoints.map((point, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-300">
          <span className="text-red-500 font-bold text-lg mt-0.5">✓</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
```

### Step 6: Update CTA Button
Replace button with:

```jsx
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded text-lg font-semibold transition-colors">
  {config.ctaText}
</button>
```

---

## Testing

### Local Testing
```bash
# Generic version
http://localhost:3000

# Netflix version
http://localhost:3000?role=netflix-identity

# Stripe version (when added)
http://localhost:3000?role=stripe-payments

# Invalid role (should default to generic)
http://localhost:3000?role=invalid
```

### Production Testing
- `joshuafeig.com`
- `joshuafeig.com?role=netflix-identity`
- `joshuafeig.com?role=stripe-payments`

---

## Usage in Applications

### Netflix Application
Include in cover letter/portfolio link:
> "Here's my portfolio tailored to the Identity role: joshuafeig.com?role=netflix-identity"

### Stripe Application
Include in cover letter/portfolio link:
> "Here's my portfolio tailored to the Payments role: joshuafeig.com?role=stripe-payments"

### General/Unknown Role
Share generic:
> "Here's my design leadership portfolio: joshuafeig.com"

---

## Adding New Roles (Future)

To add a new role (e.g., Apple Design):

1. Add new entry to `roleConfigs`:
```javascript
'apple-design': {
  headerSubtitle: 'Senior Product Designer, [Area]',
  companyName: 'APPLE',
  problemTitle: 'Apple\'s Challenge',
  problemText: '[Your tailored problem statement]',
  fitTitle: 'How This Maps to Apple\'s Design Role',
  fitPoints: [/* your points */],
  ctaText: 'Let\'s create something magical'
}
```

2. Deploy
3. Share `joshuafeig.com?role=apple-design` in applications

---

## Notes

- The three story buttons (Strategic, Operational, Delivery) remain unchanged for all roles
- Only header, problem statement, and fit section are role-specific
- Fallback to 'generic' if invalid role parameter
- No database needed—all config is in component code
- Easy to maintain and update