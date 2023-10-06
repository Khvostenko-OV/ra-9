import './Card.css';

export default function Card({title, text, href, link, children}) {
  return (
    <div className='card'>
      {children}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{text}</p>
        <div className='card-btn'>
          <a className='card-link' href={href}>{link}</a>
        </div>
      </div>
    </div>    
  );
}