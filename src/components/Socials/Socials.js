import PropTypes from "prop-types";

const Component = ({ className, socials }) => {
  return (
    <ul className={className}>
      {socials.map((social) => {
        const { _id, url, name, icon } = social;
        return (
          <li key={_id}>
            <a
              href={url}
              title={name}
              dangerouslySetInnerHTML={{ __html: icon }}
            ></a>
          </li>
        );
      })}
    </ul>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      url: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

export default Component;
