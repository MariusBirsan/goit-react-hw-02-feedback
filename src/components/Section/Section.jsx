import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
