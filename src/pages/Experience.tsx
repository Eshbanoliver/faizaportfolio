import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaBriefcase, FaInstagram, FaYoutube, FaHandshake, FaSearch, FaChevronRight } from 'react-icons/fa';
import CountUpPkg from 'react-countup';
const CountUp = (CountUpPkg as any).default || CountUpPkg;
import { useInView } from 'react-intersection-observer';
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal';
import CTASection from '../components/sections/CTASection/CTASection';
import './Experience.css';

const experiences = [
  {
    period: '2023 – Present',
    role: 'Senior SEO & Content Strategist',
    company: 'Freelance / Self-employed',
    type: 'Full-time',
    icon: <FaSearch />,
    color: '#f9a8c9',
    achievements: [
      'Managed SEO for 10+ clients, delivering avg. 280% organic traffic growth',
      'Developed content strategies resulting in top 3 Google rankings',
      'Created editorial calendars and managed content teams',
      'Increased client e-commerce revenue by avg. 45% through SEO',
    ],
  },
  {
    period: '2022 – 2023',
    role: 'Instagram Content Creator & Strategist',
    company: 'Faiza Khan — Personal Brand',
    type: 'Creator',
    icon: <FaInstagram />,
    color: '#ff9dc7',
    achievements: [
      'Grew Instagram following from 0 to 1.8K+ organically in 12 months',
      'Secured 10+ brand collaborations with lifestyle and beauty brands',
      'Developed reels strategy resulting in 1M+ combined reel views',
      'Maintained 8.5% average engagement rate across all content',
    ],
  },
  {
    period: '2021 – 2022',
    role: 'YouTube Content Creator',
    company: 'Faiza Khan — YouTube Channel',
    type: 'Creator',
    icon: <FaYoutube />,
    color: '#ffbf8a',
    achievements: [
      'Built YouTube channel to 850 subscribers with educational SEO content',
      'Produced 100+ tutorial videos on SEO, content creation, and digital marketing',
      'Achieved 500K+ total video views through strategic YouTube SEO',
      'Launched series on "SEO for Beginners" with 50K+ views per episode',
    ],
  },
  {
    period: '2020 – 2021',
    role: 'Digital Marketing Specialist',
    company: 'Various Agencies (Contract)',
    type: 'Contract',
    icon: <FaBriefcase />,
    color: '#ffa05c',
    achievements: [
      'Executed social media campaigns for 10+ brands across niches',
      'Managed monthly ad budgets and content calendars',
      'Delivered monthly analytics reports with actionable insights',
      'Improved client page engagement by average 120%',
    ],
  },
  {
    period: '2019 – 2020',
    role: 'Brand Collaboration & Marketing',
    company: 'Freelance Influencer Marketing',
    type: 'Freelance',
    icon: <FaHandshake />,
    color: '#f9a8c9',
    achievements: [
      'Collaborated with 10+ brands for product reviews and sponsored content',
      'Built authentic audience trust through transparent content creation',
      'Negotiated brand deals and managed influencer agreements',
      'Created compelling product storytelling campaigns',
    ],
  },
];

const counters = [
  { value: 30, suffix: '+', label: 'Projects Completed', icon: '📁' },
  { value: 10, suffix: '+', label: 'Clients Worked With', icon: '🤝' },
  { value: 2500, suffix: '+', label: 'Social Reach', icon: '🌟' },
  { value: 1, suffix: '+', label: 'Year Experience', icon: '📅' },
];

function Counter({ value, suffix, label, icon }: { value: number, suffix: string, label: string, icon: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div 
      ref={ref} 
      className="exp-counter glass-card"
      variants={scaleIn}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <span className="exp-counter__icon">{icon}</span>
      <div className="exp-counter__value gradient-text">
        {inView ? <CountUp end={value} duration={2.5} separator="," suffix={suffix} /> : `0${suffix}`}
      </div>
      <span className="exp-counter__label">{label}</span>
      <div className="exp-counter__glow" />
    </motion.div>
  );
}

function ExperienceCard({ exp }: { exp: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="exp-card glass-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="exp-card__header" style={{ transform: 'translateZ(25px)' }}>
        <div className="exp-card__icon-wrap">
          <div className="exp-card__icon" style={{ background: `linear-gradient(135deg, ${exp.color}, #ffbf8a)` }}>
            {exp.icon}
          </div>
          <div className="exp-card__icon-glow" style={{ background: exp.color }} />
        </div>
        <div className="exp-card__title-area">
          <h3 className="exp-card__role">{exp.role}</h3>
          <div className="exp-card__meta">
            <span className="exp-card__company">{exp.company}</span>
            <span className="exp-card__dot"></span>
            <span className="exp-card__type">{exp.type}</span>
          </div>
        </div>
      </div>
      
      <ul className="exp-card__achievements" style={{ transform: 'translateZ(15px)' }}>
        {exp.achievements.map((a: string) => (
          <li key={a}>
            <div className="exp-card__bullet-wrap">
              <FaChevronRight style={{ color: exp.color }} />
            </div>
            <span>{a}</span>
          </li>
        ))}
      </ul>
      
      <div className="exp-card__shine" />
    </motion.div>
  );
}

export default function Experience() {
  const heroReveal = useScrollReveal(0.1);
  const timelineReveal = useScrollReveal(0.1);

  return (
    <div className="page-wrapper experience-page">
      {/* Decorative Background */}
      <div className="page-bg-decor">
        <div className="decor-blob blob-1"></div>
        <div className="decor-blob blob-2"></div>
        <div className="decor-blob blob-3"></div>
        <div className="decor-grid"></div>
      </div>

      {/* Page Hero */}
      <section className="exp-hero section">
        <div className="container">
          <motion.div
            ref={heroReveal.ref}
            initial="hidden"
            animate={heroReveal.controls}
            variants={staggerContainer}
            className="exp-hero__content"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">✦ Professional Journey</span>
            </motion.div>
            <motion.h1 className="section-title" variants={fadeUp}>
              A Track Record of <span className="gradient-text">Real Results</span>
            </motion.h1>
            <motion.p className="section-subtitle" variants={fadeUp}>
              Strategic SEO specialist and creative content creator with a passion for driving organic growth and building authentic digital presence.
            </motion.p>
            <motion.div className="section-divider-custom" variants={fadeUp} />
          </motion.div>
        </div>
      </section>

      {/* Counters */}
      <section className="exp-counters-section section">
        <div className="container">
          <motion.div 
            className="exp-counters-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {counters.map((c) => <Counter key={c.label} {...c} />)}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="exp-timeline-section section" id="timeline">
        <div className="container">
          <motion.div
            ref={timelineReveal.ref}
            initial="hidden"
            animate={timelineReveal.controls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Career Milestones</span>
              <h2 className="section-title">Experience <span className="gradient-text">Timeline</span></h2>
              <p className="section-subtitle">A chronological look at my professional evolution and key contributions.</p>
              <div className="section-divider-custom" />
            </motion.div>

            <div className="exp-timeline">
              <div className="exp-timeline__line"></div>
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.period}
                  className={`exp-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                  variants={fadeUp}
                >
                  <div className="exp-timeline__content">
                    <div className="exp-timeline__period-wrap">
                      <span className="exp-timeline__period">{exp.period}</span>
                      <div className="exp-timeline__node" style={{ background: exp.color }}>
                        <div className="node-inner" style={{ background: exp.color }}></div>
                      </div>
                    </div>
                    <ExperienceCard exp={exp} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

