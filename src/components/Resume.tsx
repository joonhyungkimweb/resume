import {
  profile,
  experiences,
  skills,
  languages,
  certificates,
} from "../data/resume";

// 공통 클래스
const sectionCls = "mt-16 sm:mt-[88px]";
const h2Cls =
  "mb-8 border-b border-line pb-3 text-[1.375rem] font-bold tracking-[-0.02em]";
const metaCls = "mt-[0.3rem] text-[0.9rem] text-muted";
const bulletUl = "mt-[0.9rem] list-none";
const bulletLi =
  "relative mb-[0.35rem] pl-4 before:absolute before:left-[0.1rem] before:text-muted before:content-['·']";

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener">
    {children}
  </a>
);

export const Resume = () => {
  return (
    <main className="mx-auto max-w-160 px-5 pt-18 pb-16 sm:px-6 sm:pt-30 sm:pb-24">
      <header>
        <h1 className="text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.5rem]">
          {profile.name}
        </h1>
        <p className="mt-1 text-muted">{profile.title}</p>
        <p className="mt-6 text-[1.0625rem] leading-[1.8]">{profile.intro}</p>
        <nav className="mt-5 flex gap-4 text-[0.9375rem] text-muted">
          {profile.links.map((l) => (
            <ExternalLink key={l.href} href={l.href}>
              {l.label}
            </ExternalLink>
          ))}
        </nav>
      </header>

      <section className={sectionCls}>
        <h2 className={h2Cls}>경력</h2>
        {experiences.map((exp) => (
          <article key={exp.company} className="mb-16 last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-[1.25rem] font-bold tracking-[-0.02em]">
                {exp.href ? (
                  <ExternalLink href={exp.href}>{exp.company}</ExternalLink>
                ) : (
                  exp.company
                )}
              </h3>
              {exp.period && (
                <span className="text-[0.9rem] text-muted">{exp.period}</span>
              )}
            </div>
            <div className="mt-6 flex flex-col gap-8 border-l border-line pl-5.5">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <h4 className="text-[1.0625rem] font-semibold">
                    {[role.org, role.title].filter(Boolean).join(" · ")}
                  </h4>
                  {role.note && <p className={metaCls}>{role.note}</p>}
                  <ul className={bulletUl}>
                    {role.points.map((p) => (
                      <li key={p} className={bulletLi}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>기술</h2>
        {skills.map((s) => (
          <article key={s.category} className="mb-11 last:mb-0">
            <h3 className="text-[1.1875rem] font-semibold">{s.category}</h3>
            <ul className={bulletUl}>
              {s.items.map((item) => (
                <li key={item} className={bulletLi}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={sectionCls}>
        <h2 className={h2Cls}>언어 · 자격</h2>
        <div className="flex flex-wrap gap-11">
          <article className="flex-1 basis-50">
            <h3 className="text-[1.1875rem] font-semibold">외국어</h3>
            <ul className={bulletUl}>
              {languages.map((l) => (
                <li key={l} className={bulletLi}>
                  {l}
                </li>
              ))}
            </ul>
          </article>
          <article className="flex-1 basis-50">
            <h3 className="text-[1.1875rem] font-semibold">자격증</h3>
            <ul className={bulletUl}>
              {certificates.map((c) => (
                <li key={c} className={bulletLi}>
                  {c}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <footer className="mt-16 border-t border-line pt-6 text-right text-[0.9rem] text-muted sm:mt-22">
        감사합니다.
      </footer>
    </main>
  );
};
