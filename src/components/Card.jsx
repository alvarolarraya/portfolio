import './Card.css';

export default function Card({href, title, body, image_path, transition_image, transition_title,card}) {
    return (
        <div transition:name={transition_image}>
            <li id={card} className="link-card">
                <a href={href}>
                    <h2 style={{viewTransitionName: transition_title}}>
                        {title}
                    </h2>
                    <p>
                        {body}
                    </p><br></br>
                    <img src={image_path} alt="" style={{viewTransitionName: transition_image}} transition:name={transition_image}></img>
                </a>
            </li>
        </div>
    )
}
