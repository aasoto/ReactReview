import PropTypes from 'prop-types';

export const Props = ({ title, number }) => {
  return (<>
    <h1>{ title }</h1>
    <h1>{ number + 1 }</h1>
  </>)
}

Props.PropTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}

Props.defaultProps = {
    title: 'No title',
    number: 0,
}
