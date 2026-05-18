import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaMedal, FaLaptop, FaChevronRight } from 'react-icons/fa';
import { useScrollReveal, fadeUp, scaleIn, staggerContainer } from '../hooks/useScrollReveal';
import CTASection from '../components/sections/CTASection/CTASection';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'University of Karachi',
    period: '2016 – 2019',
    desc: 'Focused on business administration, marketing fundamentals, and communications. Built the analytical foundation for digital marketing.',
    icon: <FaGraduationCap />,
    color: '#ff9dc7', // Vibrant Pink
  },
  {
    degree: 'Intermediate in Commerce',
    institution: 'Board of Secondary Education',
    period: '2014 – 2016',
    desc: 'Completed intermediate level education with distinction in Commerce subjects.',
    icon: <FaGraduationCap />,
    color: '#7f9cf5', // Indigo
  },
];

const certifications = [
  {
    title: 'Google Analytics 4 Certification',
    issuer: 'Google',
    year: '2024',
    icon: '🎯',
    color: '#4fd1c5', // Teal/Mint
  },
  {
    title: 'Google Search Ads Certification',
    issuer: 'Google Skillshop',
    year: '2024',
    icon: '🔍',
    color: '#63b3ed', // Sky Blue
  },
  {
    title: 'HubSpot Content Marketing',
    issuer: 'HubSpot Academy',
    year: '2023',
    icon: '✍️',
    color: '#ff9dc7', // Vibrant Pink
  },
  {
    title: 'SEMrush SEO Fundamentals',
    issuer: 'SEMrush Academy',
    year: '2023',
    icon: '📊',
    color: '#f6ad55', // Orange
  },
  {
    title: 'Facebook Blueprint Certification',
    issuer: 'Meta',
    year: '2022',
    icon: '📱',
    color: '#b794f4', // Lavender
  },
  {
    title: 'YouTube Creator Academy',
    issuer: 'Google',
    year: '2022',
    icon: '🎬',
    color: '#fc8181', // Soft Red/Coral
  },
];

const courses = [
  {
    title: 'Advanced Technical SEO Masterclass',
    platform: 'Udemy',
    hours: '40 hours',
    icon: <FaLaptop />,
    color: '#4fd1c5',
  },
  {
    title: 'Instagram Marketing Mastery',
    platform: 'Coursera',
    hours: '30 hours',
    icon: <FaLaptop />,
    color: '#b794f4',
  },
  {
    title: 'YouTube SEO & Channel Growth',
    platform: 'Skillshare',
    hours: '25 hours',
    icon: <FaLaptop />,
    color: '#fc8181',
  },
  {
    title: 'Content Strategy for Social Media',
    platform: 'LinkedIn Learning',
    hours: '20 hours',
    icon: <FaLaptop />,
    color: '#63b3ed',
  },
  {
    title: 'Canva for Business Graphics',
    platform: 'Canva Design School',
    hours: '15 hours',
    icon: <FaLaptop />,
    color: '#f6ad55',
  },
  {
    title: 'WordPress for Beginners to Advanced',
    platform: 'Udemy',
    hours: '35 hours',
    icon: <FaLaptop />,
    color: '#7f9cf5',
  },
];


const workshops = [
  { title: 'Digital Marketing Summit 2024', org: 'DigiSummit India', icon: '🎤' },
  { title: 'Creator Economy Workshop', org: 'Social Media Week', icon: '🚀' },
  { title: 'SEO Bootcamp - Advanced', org: 'Moz Academy', icon: '🔧' },
  { title: 'Personal Branding Masterclass', org: 'BrandFest Online', icon: '💡' },
];

function Card3D({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

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
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
      <div className="card-shine" />
    </motion.div>
  );
}

export default function Education() {
  const { ref: heroRef, controls: heroControls } = useScrollReveal(0.1);
  const { ref: eduRef, controls: eduControls } = useScrollReveal(0.1);
  const { ref: certRef, controls: certControls } = useScrollReveal(0.1);
  const { ref: courseRef, controls: courseControls } = useScrollReveal(0.1);

  return (
    <div className="page-wrapper education-page">
      {/* Decorative Background */}
      <div className="page-bg-decor">
        <div className="decor-blob blob-1"></div>
        <div className="decor-blob blob-2"></div>
        <div className="decor-blob blob-3"></div>
        <div className="decor-grid"></div>
      </div>

      {/* Page Hero */}
      <section className="edu-hero section">
        <div className="container">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={staggerContainer}
            className="edu-hero__content"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">✦ Academic Foundation</span>
            </motion.div>
            <motion.h1 className="section-title" variants={fadeUp}>
              Knowledge That <span className="gradient-text">Powers Results</span>
            </motion.h1>
            <motion.p className="section-subtitle" variants={fadeUp}>
              A strong academic background in commerce and marketing, continuously upgraded with the latest digital certifications.
            </motion.p>
            <motion.div className="section-divider-custom" variants={fadeUp} />
          </motion.div>
        </div>
      </section>

      {/* Academic */}
      <section className="edu-academic section" id="academic">
        <div className="container">
          <motion.div
            ref={eduRef}
            initial="hidden"
            animate={eduControls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Formal Education</span>
              <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
              <div className="section-divider-custom" />
            </motion.div>

            <motion.div className="edu-cards" variants={staggerContainer}>
              {education.map((edu) => (
                <motion.div key={edu.degree} variants={fadeUp}>
                  <Card3D className="edu-card glass-card">
                    <div className="edu-card__icon-wrap">
                      <div className="edu-card__icon" style={{ background: `linear-gradient(135deg, ${edu.color}, #ffbf8a)` }}>
                        {edu.icon}
                      </div>
                      <div className="edu-card__icon-glow" style={{ background: edu.color }} />
                    </div>
                    <div className="edu-card__content">
                      <span className="edu-card__period">{edu.period}</span>
                      <h3 className="edu-card__degree">{edu.degree}</h3>
                      <span className="edu-card__institution">{edu.institution}</span>
                      <p className="edu-card__desc">{edu.desc}</p>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="edu-certs section" id="certifications">
        <div className="container">
          <motion.div
            ref={certRef}
            initial="hidden"
            animate={certControls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Professional Proof</span>
              <h2 className="section-title">Industry <span className="gradient-text">Certifications</span></h2>
              <div className="section-divider-custom" />
            </motion.div>

            <motion.div className="certs-grid" variants={staggerContainer}>
              {certifications.map((cert) => (
                <motion.div key={cert.title} variants={scaleIn}>
                  <Card3D className="cert-card glass-card">
                    <div className="cert-card__icon">{cert.icon}</div>
                    <div className="cert-card__year-badge" style={{ color: cert.color, borderColor: cert.color }}>
                      {cert.year}
                    </div>
                    <h3 className="cert-card__title">{cert.title}</h3>
                    <div className="cert-card__footer">
                      <FaCertificate style={{ color: cert.color }} />
                      <span className="cert-card__issuer">{cert.issuer}</span>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="edu-courses section" id="courses">
        <div className="container">
          <motion.div
            ref={courseRef}
            initial="hidden"
            animate={courseControls}
            variants={staggerContainer}
          >
            <motion.div className="section-header" variants={fadeUp}>
              <span className="section-tag">✦ Continuous Learning</span>
              <h2 className="section-title">Courses &amp; <span className="gradient-text">Training</span></h2>
              <div className="section-divider-custom" />
            </motion.div>

            <div className="courses-layout">
              <motion.div className="courses-list" variants={staggerContainer}>
                {courses.map((course) => (
                  <motion.div 
                    key={course.title} 
                    className="course-item glass-card" 
                    variants={fadeUp}
                    whileHover={{ x: 10, background: 'rgba(255,255,255,0.9)' }}
                  >
                    <div className="course-item__icon-wrap">
                      <div className="course-item__icon" style={{ background: `linear-gradient(135deg, ${course.color}, #ffbf8a)` }}>
                        {course.icon}
                      </div>
                    </div>
                    <div className="course-item__body">
                      <h4 className="course-item__title">{course.title}</h4>
                      <div className="course-item__meta">
                        <span className="platform">{course.platform}</span>
                        <span className="dot">·</span>
                        <span className="duration">{course.hours}</span>
                      </div>
                    </div>
                    <div className="course-item__medal">
                      <FaMedal />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Workshops */}
              <motion.div className="workshops-container" variants={fadeUp}>
                <div className="workshops-card glass-card">
                  <h3 className="workshops__title">Workshops &amp; Events</h3>
                  <div className="workshops-list">
                    {workshops.map((w) => (
                      <div key={w.title} className="workshop-item">
                        <div className="workshop-item__icon-wrap">
                          <span className="workshop-item__icon">{w.icon}</span>
                        </div>
                        <div className="workshop-item__text">
                          <strong className="workshop-item__title">{w.title}</strong>
                          <span className="workshop-item__org">{w.org}</span>
                        </div>
                        <FaChevronRight className="workshop-item__arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

