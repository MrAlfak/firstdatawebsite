type Locale = "fa" | "en";

type Content = {
  dir: "rtl" | "ltr";
  lang: Locale;
  nav: string[];
  brand: string;
  eyebrow: string;
  headline: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  aboutTitle: string;
  aboutLead: string;
  servicesTitle: string;
  services: string[];
  workTitle: string;
  workLead: string;
  works: string[];
  valuesTitle: string;
  valuesLead: string;
  values: { title: string; body: string }[];
  footerTitle: string;
  footerBody: string;
  email: string;
};

const content: Record<Locale, Content> = {
  fa: {
    dir: "rtl",
    lang: "fa",
    nav: ["خدمات", "نمونه کارها", "رویکرد", "تماس"],
    brand: "اولین دیتا",
    eyebrow: "استودیوی طراحی، توسعه و رشد دیجیتال",
    headline: "محصولات دیجیتال برای برندهای آینده نگر",
    intro:
      "ما برای کسب و کارها، برندها و استارتاپ ها وب سایت، اپلیکیشن، پلتفرم اختصاصی و کمپین های آنلاین می سازیم؛ از ایده تا اجرا و رشد.",
    primaryCta: "شروع همکاری",
    secondaryCta: "مشاهده خدمات",
    aboutTitle: "از استراتژی تا اجرا، کنار تیم شما می ایستیم.",
    aboutLead:
      "اولین دیتا یک تیم خلاق و فنی برای ساخت تجربه های دیجیتال دقیق، سریع و قابل رشد است. ما طراحی، تکنولوژی و بازاریابی را در یک مسیر واحد قرار می دهیم تا خروجی فقط زیبا نباشد؛ بلکه نتیجه بسازد.",
    servicesTitle: "خدمات",
    services: [
      "طراحی سایت و رابط کاربری",
      "طراحی و توسعه اپلیکیشن",
      "فروشگاه اینترنتی و پلتفرم اختصاصی",
      "برندینگ و هویت بصری",
      "دیجیتال مارکتینگ و تبلیغات آنلاین",
      "طراحی بازی و محصولات تعاملی"
    ],
    workTitle: "نمونه کارها",
    workLead:
      "در نسخه بعدی، پروژه های واقعی اولین دیتا با تصویر، توضیح، تکنولوژی و نتیجه هر پروژه در این بخش قرار می گیرد.",
    works: ["پلتفرم سازمانی", "وب سایت برند", "اپلیکیشن موبایل", "کمپین دیجیتال"],
    valuesTitle: "رویکرد ما",
    valuesLead: "یک فرآیند ساده، دقیق و نتیجه محور برای تبدیل ایده به محصول قابل ارائه.",
    values: [
      {
        title: "شفاف",
        body: "مسیر پروژه، زمان بندی و خروجی ها از ابتدا روشن تعریف می شوند."
      },
      {
        title: "زیبا و کاربردی",
        body: "طراحی باید هم متمایز باشد، هم تجربه کاربر را ساده و مؤثر کند."
      },
      {
        title: "قابل رشد",
        body: "زیرساخت فنی را طوری می سازیم که با رشد کسب و کار محدود نشود."
      }
    ],
    footerTitle: "ایده بعدی شما را بسازیم؟",
    footerBody:
      "برای طراحی سایت، اپلیکیشن، محصول دیجیتال یا کمپین آنلاین با اولین دیتا در ارتباط باشید.",
    email: "info@firstdata.ir"
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav: ["Services", "Work", "Approach", "Contact"],
    brand: "Avvalin Data",
    eyebrow: "A digital studio for design, development, and growth",
    headline: "Digital products for future focused brands",
    intro:
      "We build websites, applications, custom platforms, and online campaigns for companies, brands, and startups from idea to launch and growth.",
    primaryCta: "Start a Project",
    secondaryCta: "View Services",
    aboutTitle: "From strategy to launch, we work as part of your team.",
    aboutLead:
      "Avvalin Data is a creative and technical team for building precise, fast, and scalable digital experiences. We connect design, technology, and marketing so the final product is not only beautiful, but effective.",
    servicesTitle: "Services",
    services: [
      "Website and UI Design",
      "Mobile App Design and Development",
      "E-commerce and Custom Platforms",
      "Branding and Visual Identity",
      "Digital Marketing and Online Advertising",
      "Game and Interactive Product Design"
    ],
    workTitle: "Selected Work",
    workLead:
      "In the next version, real Avvalin Data projects can be added here with visuals, context, technology, and measurable outcomes.",
    works: ["Enterprise Platform", "Brand Website", "Mobile Application", "Digital Campaign"],
    valuesTitle: "Our Approach",
    valuesLead: "A simple, precise, outcome-driven process for turning ideas into launch-ready products.",
    values: [
      {
        title: "Clear",
        body: "Project direction, timelines, and deliverables are defined clearly from the beginning."
      },
      {
        title: "Useful and refined",
        body: "Design should feel distinctive while making the user journey simpler and more effective."
      },
      {
        title: "Scalable",
        body: "We build technical foundations that can grow with the business."
      }
    ],
    footerTitle: "Shall we build your next idea?",
    footerBody:
      "Contact Avvalin Data for websites, apps, digital products, and online campaigns.",
    email: "info@firstdata.ir"
  }
};

function getLocale(searchParams?: { lang?: string }): Locale {
  return searchParams?.lang === "en" ? "en" : "fa";
}

export default function Home({ searchParams }: { searchParams?: { lang?: string } }) {
  const locale = getLocale(searchParams);
  const t = content[locale];
  const otherLocale = locale === "fa" ? "en" : "fa";

  return (
    <div className="site-shell" dir={t.dir} lang={t.lang}>
      <div className="noise" />
      <header className="header">
        <a className="brand" href={`/?lang=${locale}`} aria-label={t.brand}>
          <span className="brand-mark">FD</span>
          <span>{t.brand}</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {t.nav.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="lang-switch" aria-label="Language switcher">
          <a className={locale === "fa" ? "active" : ""} href="/?lang=fa">
            FA
          </a>
          <a className={locale === "en" ? "active" : ""} href="/?lang=en">
            EN
          </a>
        </div>
      </header>

      <main>
        <section className="section hero">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.headline}</h1>
          </div>
          <div className="hero-copy">
            <p>{t.intro}</p>
            <div className="cta-row">
              <a className="button primary" href={`#${t.nav[3]}`}>
                {t.primaryCta}
              </a>
              <a className="button" href={`#${t.nav[0]}`}>
                {t.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="section grid-two">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="lead">{t.aboutLead}</p>
        </section>

        <section className="section grid-two" id={t.nav[0]}>
          <h2 className="section-title">{t.servicesTitle}</h2>
          <div className="service-list">
            {t.services.map((service, index) => (
              <div className="service-item" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
                <span>+</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section grid-two" id={t.nav[1]}>
          <div>
            <p className="eyebrow">{t.workTitle}</p>
            <h2 className="section-title">{t.workTitle}</h2>
          </div>
          <div>
            <p className="lead">{t.workLead}</p>
            <div className="work-list work-list-spaced">
              {t.works.map((work, index) => (
                <div className="work-item" key={work}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{work}</h3>
                  <span>2026</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id={t.nav[2]}>
          <div className="grid-two values-intro">
            <h2 className="section-title">{t.valuesTitle}</h2>
            <p className="lead">{t.valuesLead}</p>
          </div>
          <div className="cards">
            {t.values.map((value) => (
              <article className="card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id={t.nav[3]}>
        <h2>{t.footerTitle}</h2>
        <div className="contact-box">
          <p>{t.footerBody}</p>
          <div className="cta-row">
            <a className="button primary" href={`mailto:${t.email}`}>
              {t.email}
            </a>
            <a className="button" href={`/?lang=${otherLocale}`}>
              {otherLocale === "fa" ? "نسخه فارسی" : "English version"}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
