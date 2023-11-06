import PropTypes from 'prop-types';
import {
  StatisticWrapper,
  StatisticsTitle,
  StatList,
  StatItem,
  StatPercentage,
} from './Statistics.styled';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticWrapper className="statistics">
      {title && <StatisticsTitle className="title">{title}</StatisticsTitle>}
      <StatList className="stat-list">
        {stats.map(item => (
          <StatItem className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <StatPercentage className="percentage">
              {item.percentage}%
            </StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
