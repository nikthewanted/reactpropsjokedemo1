import "./joke.css"
export default function Joke ({setup,punchline}) {
    return (
        <div className="joke">
            <p>{setup}</p>
            <p>{punchline}</p>
            <hr />
        </div>
    )
}