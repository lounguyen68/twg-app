import './event-card.scss';

const EventCard = ({img, title, content, time, organizers, followers}) => {
  return (
    <div className="eventcard">
        <div className="eventcard__img">
            <img src={img} alt="" />
        </div>
        <div className="eventcard__container">
            <div className="eventcard__container__title">
                <p>{`${title.slice(0,53)}...`}</p>
                <span></span>
            </div>
            <div className="eventcard__container__time">
                <p>{time}</p>
            </div>
            <div className="eventcard__container__content">
                <p>{content}</p>
            </div>
            <div className="eventcard__container__organizers">
                <p>{organizers}</p>
            </div>
            <div className="eventcard__container__followers">
                <p>{`${followers} followers`}</p>
            </div>
        </div>
    </div>
  )
}

export default EventCard