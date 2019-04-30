function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    return (day === 0 || day ===6) ? 'Weekend':'Weekday';
}

console.log(isWeekend());