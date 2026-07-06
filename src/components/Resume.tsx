import projectsData from "../data/projects.json";
import {
  profile,
  experiences,
  skills,
  languages,
  certificates,
} from "../data/resume";

// link / storeLinks / details 는 프로젝트마다 있을 수도, 없을 수도 있다.
interface Project {
  title: string;
  group: string;
  team: string;
  start: string;
  end: string;
  link?: string;
  storeLinks?: { ios?: string; android?: string };
  details?: string;
  stacks: string;
}
const projects = projectsData as Project[];

const clean = (s: string) => s.replace(/\n/g, " ");
const isOutsource = (team: string) => team.includes("외주");

// 공통 클래스
const sectionCls = "mt-16 sm:mt-[88px]";
const h2Cls =
  "mb-8 border-b border-line pb-3 text-[1.375rem] font-bold tracking-[-0.02em]";
const metaCls = "mt-[0.3rem] text-[0.9rem] text-muted";
const bulletUl = "mt-[0.9rem] list-none";
const bulletLi =
  "relative mb-[0.35rem] pl-4 before:absolute before:left-[0.1rem] before:text-muted before:content-['·']";
const stacksCls = "mt-4 text-[0.85rem] text-muted";

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
        {experiences.map((exp) => {
          const items = projects.filter((p) => p.group === exp.group);
          const meta = [exp.role, exp.period].filter(Boolean).join(" · ");
          return (
            <article key={exp.group} className="mb-16 last:mb-0">
              <h3 className="text-[1.25rem] font-bold tracking-[-0.02em]">
                {exp.href ? (
                  <ExternalLink href={exp.href}>{exp.company}</ExternalLink>
                ) : (
                  exp.company
                )}
              </h3>
              {meta && <p className={metaCls}>{meta}</p>}
              {exp.summary && (
                <ul className={bulletUl}>
                  {exp.summary.map((s) => (
                    <li key={s} className={bulletLi}>
                      {s}
                    </li>
                  ))}
                </ul>
              )}
              {items.length > 0 && (
                <div className="mt-7 flex flex-col gap-9 border-l border-line pl-5.5">
                  {items.map((p) => (
                    <article key={p.title}>
                      <h4 className="text-[1.0625rem] font-semibold">
                        {p.link ? (
                          <ExternalLink href={p.link}>
                            {clean(p.title)}
                          </ExternalLink>
                        ) : (
                          clean(p.title)
                        )}
                        {isOutsource(p.team) && (
                          <span className="ml-2 rounded border border-line px-1.75 py-px align-middle text-[0.7rem] font-medium text-muted">
                            외주
                          </span>
                        )}
                      </h4>
                      <p className={metaCls}>
                        {p.start} ~ {p.end}
                        {exp.showAffiliation && ` · ${p.team}`}
                      </p>
                      {p.storeLinks && (
                        <p className="mt-[0.2rem] flex gap-3 text-[0.9rem] text-muted">
                          {p.storeLinks.ios && (
                            <ExternalLink href={p.storeLinks.ios}>
                              App Store
                            </ExternalLink>
                          )}
                          {p.storeLinks.android && (
                            <ExternalLink href={p.storeLinks.android}>
                              Google Play
                            </ExternalLink>
                          )}
                        </p>
                      )}
                      {p.details && (
                        <div className="mt-[0.9rem] space-y-3">
                          {p.details.split("\n").map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      )}
                      <p className={stacksCls}>{p.stacks}</p>
                    </article>
                  ))}
                </div>
              )}
            </article>
          );
        })}
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
