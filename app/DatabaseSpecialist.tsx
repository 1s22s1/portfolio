const Oss = () => {
    const works = [
        { date: "2025/09/01", content: "令和6年度午前2", score: "16/25" },
        { date: "2025/09/03", content: "令和5年度午前2", score: "16/25" },
    ];

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left">
                            <th className="px-4 py-2 border-b">日付</th>
                            <th className="px-4 py-2 border-b">内容</th>
                            <th className="px-4 py-2 border-b">得点</th>
                        </tr>
                    </thead>
                    <tbody>
                        {works.map((e, i) => (
                            <tr
                                key={i}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-4 py-2 border-b">{e.date}</td>
                                <td className="px-4 py-2 border-b">{e.content}</td>
                                <td className="px-4 py-2 border-b text-center">{e.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Oss;
