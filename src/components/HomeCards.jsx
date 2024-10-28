import { Link } from 'react-router-dom';
import Card from './Card';
import './HomeCards.css'; // Import the CSS file with the styles

const HomeCards = () => {
  return (
    <section className='homecards-section'>
      <div className='homecards-container'>
        <div className='homecards-grid'>
          <Card>
            <h2 className='homecards-title'>For Developers</h2>
            <p className='homecards-description'>
              Browse our React jobs and start your career today
            </p>
            <Link
              to='/jobs'
              className='homecards-link homecards-link-jobs'
            >
              Browse Jobs
            </Link>
          </Card>
          <Card className='homecards-card-bg'>
            <h2 className='homecards-title'>For Employers</h2>
            <p className='homecards-description'>
              List your job to find the perfect developer for the role
            </p>
            <Link
              to='/add-job'
              className='homecards-link homecards-link-add-job'
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
