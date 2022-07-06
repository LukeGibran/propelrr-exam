import { motion } from "framer-motion";

const BlogEvents = ({ fadeInUp }) => {
  return (
    <motion.section
      id="blogEvents"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="blogevents__wrapper">
        <motion.div variants={fadeInUp} className="blogs">
          <div className="blog__header">
            <div className="blog__header-wrapper">
              <h1>BLOG x EVENTS</h1>
              <a href="#">SEE ALL </a>
            </div>
          </div>

          <div className="blog__lists">
            <div className="blog__list">
              <div className="blog__img-thumbnail">
                <img src="/images/blog-1.jpg" alt="blog image thumbnail 1" />
              </div>
              <div className="blog__details">
                <div className="blog__date">
                  <p>02/06/2017</p>
                </div>
                <div className="blog__title">
                  Dennis wins Van Doren Invitational WSBC Champ
                </div>
                <div className="blog__link">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="blog__list">
              <div className="blog__img-thumbnail">
                <img src="/images/blog-2.jpg" alt="blog image thumbnail 1" />
              </div>
              <div className="blog__details">
                <div className="blog__date">
                  <p>02/06/2017</p>
                </div>
                <div className="blog__title">
                  Dennis wins Van Doren Invitational WSBC Champ
                </div>
                <div className="blog__link">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="blog__list">
              <div className="blog__img-thumbnail">
                <img src="/images/blog-3.jpg" alt="blog image thumbnail 1" />
              </div>
              <div className="blog__details">
                <div className="blog__date">
                  <p>02/06/2017</p>
                </div>
                <div className="blog__title">
                  Dennis wins Van Doren Invitational WSBC Champ
                </div>
                <div className="blog__link">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} className="events">
          <div className="events__wrapper">
            <div className="event__img">
              <img src="/images/event-helmet.png" alt="Event Helment" />
            </div>
            <div className="event__details">
              <div className="event__title">
                <h1>AGV</h1>
                <h1>Best</h1>
                <h1>Sellers</h1>
                <hr />
              </div>
              <div className="event__pharagraph">
                <p>See our most popular products</p>
              </div>
              <div className="event__button">
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogEvents;
