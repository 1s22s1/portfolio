const Qualification = () => {
    const qualifications = [
        { yearMonth: "2025/07", name: "実用数学技能検定準2級" },
        { yearMonth: "2025/07", name: "ビジネス実務法務検定3級" },
        { yearMonth: "2025/06", name: "丙種危険物取扱者" },
        { yearMonth: "2025/06", name: "ファイナンシャルプランナー2級" },
        { yearMonth: "2025/05", name: "簿記2級" },
        { yearMonth: "2024/12", name: "情報処理安全確保支援士試験" },
        { yearMonth: "2024/11", name: "ファイナンシャルプランナー3級" },
        { yearMonth: "2024/10", name: "AWS DVA" },
        { yearMonth: "2024/09", name: "簿記3級" },
        { yearMonth: "2024/09", name: "G検定" },
        { yearMonth: "2024/08", name: "AWS CLF" },
        { yearMonth: "2024/07", name: "データサイエンティスト検定" },
        { yearMonth: "2024/07", name: "統計検定2級" },
        { yearMonth: "2024/07", name: "TOEIC 755" },
        { yearMonth: "2024/07", name: "応用情報" },
        { yearMonth: "2024/02", name: "統計検定3級" },
        { yearMonth: "2024/02", name: "基本情報" },
    ]

    return (
        <>
            <ul>
                {qualifications.map((e, i) => <li key={i}>{e.yearMonth} {e.name}</li>)}
            </ul>
        </>
    )
}

export default Qualification;
