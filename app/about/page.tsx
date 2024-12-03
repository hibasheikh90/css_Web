import Link from "next/link";

export default function About() {
  return (
    <div className="aboutContainer">
      <h1>About Dreamy Cakes</h1>

      <section className="section">
        <h2>Our Story</h2>
        <p>
          Dreamy Cakes started with a single goal in mind: to create the most
          delicious and visually stunning cakes for every occasion. What began
          as a small home-based bakery has now grown into one of the most
          trusted and loved cake brands in the region. From weddings to
          birthdays, anniversaries to corporate events, Dreamy Cakes is the name
          you can rely on for top-tier desserts.
        </p>
        <p>
          Founded by pastry chef Jane Doe in 2010, Dreamy Cakes started with a
          passion for baking and a dream to bring the highest quality cakes to
          the market. Over the years, we&apos;ve expanded our menu, perfected
          our recipes, and served thousands of happy customers, always with a
          focus on innovation and the freshest ingredients.
        </p>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide our customers with the most
          beautiful and delicious cakes that enhance every moment. Whether
          it&apos;s a simple family gathering or a grand wedding, we want our
          cakes to be a part of your memories, bringing smiles and joy with
          every bite.
        </p>
        <p>
          We pride ourselves on our attention to detail, ensuring that every
          cake we make is a true work of art. From designing custom cakes to
          offering a variety of flavors and fillings, Dreamy Cakes delivers an
          unforgettable experience.
        </p>
      </section>

      <section className="section">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Quality</strong> - We use only the finest ingredients to
            craft our cakes.
          </li>
          <li>
            <strong>Creativity</strong> - Every cake we bake is a unique
            creation tailored to our customers&apos; needs.
          </li>
          <li>
            <strong>Customer Satisfaction</strong> - We go above and beyond to
            ensure every customer is happy with their order.
          </li>
          <li>
            <strong>Freshness</strong> - Our cakes are made fresh daily,
            ensuring the highest quality in every bite.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Our Vision</h2>
        <p>
          At Dreamy Cakes, we envision a world where cake isn&apos;t just a
          dessert but a beautiful work of art that makes moments special. Our
          goal is to continue innovating, expanding our reach, and ensuring that
          everyone who tastes our cakes experiences the love and care that goes
          into every bite.
        </p>
      </section>

      <section className="section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="teamMember">
            <h3>Hiba Sheikh</h3>
            <p>Founder &amp; Head Chef</p>
            <p>
              Jane is the heart and soul of Dreamy Cakes. With over 15 years of
              experience in cake baking and design, she leads our team with
              passion and dedication to the craft.
            </p>
          </div>
          <div className="teamMember">
            <h3>Syeda Mehak</h3>
            <p>Head Baker</p>
            <p>
              John is the wizard behind our delicious cake recipes, specializing
              in everything from classic cakes to contemporary designs. His
              creativity and expertise ensure every cake is perfect.
            </p>
          </div>
          <div className="teamMember">
            <h3>Syeda Areeba</h3>
            <p>Cake Decorator</p>
            <p>
              Alice adds the magic to our cakes with her exceptional decorating
              skills. From fondant flowers to intricate piping, she ensures
              every cake is a visual masterpiece.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Customer Testimonials</h2>
        <div className="testimonials">
          <div className="testimonials">
            <p>
              &quot;Dreamy Cakes made our wedding day even more special. The
              cake was absolutely stunning and delicious! We couldn&apos;t have
              asked for anything more.&quot; - Sarah and Mike
            </p>
          </div>
          <div className="testimonials">
            <p>
              &quot;We ordered a custom birthday cake for my daughter, and it
              was perfect! The team really listened to what we wanted, and the
              design exceeded our expectations. Thank you, Dreamy Cakes!&quot; -
              Emma L.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Get In Touch</h2>
        <p>
          If you&apos;d like to learn more about our cakes or make an order,
          feel free to contact us:
        </p>
        <p>Email: contact@dreamycakes.com</p>
        <p>Phone: +123 456 7890</p>
        <Link href="/contact" className="contactLink">
          Visit Our Contact Page
        </Link>
      </section>
    </div>
  );
}
