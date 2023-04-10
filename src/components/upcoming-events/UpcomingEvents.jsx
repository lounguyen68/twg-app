import './upcoming-events.scss';
import EventCard from '../event-card/EventCard';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  return (
    <div className="upcoming section">
            <div className="upcoming__title">
                  <h1>UPCOMING EVENTS</h1>
            </div>
            <div className="upcoming__list">
            {/* call Api */}
                  <EventCard 
                        img="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F339530819%2F239078127498%2F1%2Foriginal.20220822-091118?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=cc099d2603e4cd78a7635ba204d3f732"
                        title="Traders Fair 2023 - Vietnam, Hà Nội (Financial Education Event)" 
                        time="Sat, Jun 24, 10:00 AM" 
                        content="Intercontinental Hanoi Landmark Landmark Landmark"
                        organizers="FINEXPO"
                        followers="7.9k"
                  />
                  <EventCard 
                        img="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F339530819%2F239078127498%2F1%2Foriginal.20220822-091118?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=cc099d2603e4cd78a7635ba204d3f732"
                        title="Upcoming Events" 
                        time="Sat, Jun 24, 10:00 AM" 
                        content="Intercontinental Hanoi Landmark"
                        organizers="FINEXPO"
                        followers="7.9k"
                  />
                  <EventCard 
                        img="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F339530819%2F239078127498%2F1%2Foriginal.20220822-091118?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=cc099d2603e4cd78a7635ba204d3f732"
                        title="Upcoming Events" 
                        time="Sat, Jun 24, 10:00 AM" 
                        content="Intercontinental Hanoi Landmark"
                        organizers="FINEXPO"
                        followers="7.9k"
                  />
                  <EventCard 
                        img="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F339530819%2F239078127498%2F1%2Foriginal.20220822-091118?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=cc099d2603e4cd78a7635ba204d3f732"
                        title="Upcoming Events" 
                        time="Sat, Jun 24, 10:00 AM" 
                        content="Intercontinental Hanoi Landmark"
                        organizers="FINEXPO"
                        followers="7.9k"
                  />
            </div>
            <div className="upcoming__more">
                  <Link to="/events">
                        <div>
                              <p>View more</p>
                        </div>
                  </Link>
            </div>
    </div>
  )
}

export default UpcomingEvents