const QA = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <>
            <h2 className="my-2">{question}</h2>
            <p>{answer}</p>
        </>
    )
}

export default QA;
