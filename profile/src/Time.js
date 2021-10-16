function Time() {
    return (
        <div className="Time">
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Time;