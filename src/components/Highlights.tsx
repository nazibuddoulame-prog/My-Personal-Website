import Image from "next/image";
import projectsImg from "@/assets/projects.png";
import contactImg from "@/assets/contact.png";
import linkIcon from "@/assets/icon-link.svg";

const industries = [
  "Healthcare", "Data Science", "E-commerce", "Dental", "Travel & Tourism", "SAAS", "B2C",
  "Greetings Card", "Signage", "Construction", "Education", "Social Platfom", "Finance",
  "Sports & Fitness", "Design & Software", "Analytics", "Manufacturing", "AI", "Food & Beverage",
  "Personal Care & Beauty", "Energy & Utilities",
];

export default function Highlights() {
  return (
    <section className="highlights" id="resume">
      <div className="statement">
        <p>
          10 years experienced Product Designer &amp; Problem Solver, focused on turning ideas into meaningful
          products and intuitive user experiences.
        </p>
        <p className="statement__muted">
          If you’re building something new and want the best balance of UX and visual design, let’s talk
        </p>
      </div>

      <div className="bento">
        <div className="bento__col">
          <article className="card card--experience">
            <h2 className="card__title">10+ years of professional experience</h2>
          </article>
          <article className="card card--projects">
            <h2 className="card__title">40+ projects done</h2>
            <Image className="card--projects__img" src={projectsImg} alt="Project packaging" width={210} height={194} />
          </article>
        </div>

        <article className="card card--industries">
          <h2 className="card__title">20+ Diverse industries</h2>
          <ul className="chips">
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </article>

        <div className="bento__col">
          <article className="card card--contact" id="contact">
            <Image className="card--contact__img" src={contactImg} alt="" width={106} height={78} />
            <div className="card__body card__body--contact">
              <div className="card__copy card__copy--contact">
                <h2 className="card__title">Contact me for projects.</h2>
                <p className="card__desc">
                  Synergistically conceptualize optimal channels whereas scalable partnerships.
                </p>
              </div>
              <a className="btn btn--dark" href="#contact">Set a 15 Min Meeting</a>
            </div>
          </article>
          <article className="card card--icons">
            <div className="card__body card__body--icons">
              <div className="card__copy card__copy--icons">
                <h2 className="card__title">download my icon packs</h2>
                <p className="card__desc">
                  Synergistically conceptualize optimal channels whereas scalable partnerships.
                </p>
              </div>
              <a className="btn btn--light" href="#">
                <Image src={linkIcon} alt="" width={16} height={16} />
                Icons Pack
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
