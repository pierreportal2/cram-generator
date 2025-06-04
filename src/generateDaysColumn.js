export function generateDaysColumn(year, month) {
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const daysInMonth = new Date(year, month, 0).getDate();
    const fragment = document.createDocumentFragment();
    const fragmentNames = document.createDocumentFragment();
    for (let i = 1; i <= daysInMonth; i++) {
        const th = document.createElement('th');
        th.textContent = String(i).padStart(2, '0');
        const dayName = dayNames[new Date(year, month - 1, i).getDay()];
        const thName = document.createElement('th');
        thName.textContent = dayName;
        if (dayName === 'Sam' || dayName === 'Dim') {
            th.classList.add('grayed-out');
            thName.classList.add('grayed-out');
        }
        fragment.appendChild(th);
        fragmentNames.appendChild(thName);
    }
    return { days: fragment, names: fragmentNames };
}
