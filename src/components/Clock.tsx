export default function Clock({ time, className }: { time: Date, className: string }) {
    const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });
    return (
        // 避免 id={time} 不要直接將 time 這個 prop 傳入
        <div className={`${className} text-right text-xl font-black text-indigo-800 hover:text-slate-800 p-4`}>
            {formattedTime}
        </div>
    );
}