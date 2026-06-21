import './Article.css';
import Card from './Card';
import './Card.css'; // ВАЖНО: импортируем стили для карточек

function Article(props) {
    return (
        <div className="cards-container"> {/* ДОБАВЛЯЕМ КОНТЕЙНЕР */}
            {
                Object.keys(props.db).map((elem, index) => {
                    return <Card key={index} persone={props.db[elem]} />
                })
            }
        </div>
    )
}

export default Article;