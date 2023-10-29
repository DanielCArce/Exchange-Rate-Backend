export async function todayDate() {
    const fullYear = new Date().getFullYear();
    const fullDay = new Date().getDate();
    const fullMonth = new Date().getMonth();
    return `${fullDay<= 10 ?'0':''}${fullDay}/${fullMonth<= 10 ?'0':''}${fullMonth}/${fullYear}`
}