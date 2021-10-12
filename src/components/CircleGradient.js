import React, {useState, useEffect} from 'react';
function CircleGradient() {
    let a = [["linearColors1","50",20],["linearColors2","100",20],["linearColors3","150",20]]
   const init = new Date()
  const [date, setDate] = useState(init)  
  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerID = setTimeout(() => tick(), 1000)
    return () => {
      clearTimeout(timerID)
    }
  }, [date])
    console.log(date.getSeconds())
    return(
        <div>
            <svg width="500" height="500">
                <linearGradient id="linearColors1" x1="0" y1="0" x2="1" y2="1">
                   <stop offset="0%" stopColor="rgba(1, 228, 0, .5)"></stop>
                   <stop offset="100%" stopColor="rgba(254, 255, 1, .4)"></stop>
                </linearGradient>
                <linearGradient id="linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">
                   <stop offset="0%" stopColor="rgba(254, 255, 1, .5)"></stop>
                   <stop offset="100%" stopColor="rgba(255, 126, 0, .5)"></stop>
                </linearGradient>
                <linearGradient id="linearColors3" x1="1" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="rgba(255, 126, 0, .5)"></stop>
                   <stop offset="100%" stopColor="rgba(251, 3, 0, .5)"></stop>
                </linearGradient>
                <linearGradient id="linearColors4" x1="1" y1="1" x2="0" y2="0">
                   <stop offset="0%" stopColor="#FB0300"></stop>
                   <stop offset="100%" stopColor="#9B004A"></stop>
                </linearGradient>
                <linearGradient id="linearColors5" x1="0.5" y1="1" x2="0.5" y2="0">
                   <stop offset="0%" stopColor="#9B004A"></stop>
                   <stop offset="100%" stopColor="#7D0022"></stop>
                </linearGradient>
                <linearGradient id="linearColors6" x1="0" y1="1" x2="1" y2="0">
                   <stop offset="0%" stopColor="#7D0022"></stop>
                   <stop offset="100%" stopColor="#01E400"></stop>
                </linearGradient>
            {a.map((item, index) => (
            < circle cx="200" cy="200" r={a[index][1]} fill='none' stroke={`url(#${a[index][0]})`} key={index} item={item} strokeWidth={String(a[index][2]+date.getSeconds())}/>
          ))}
            </svg>
        </div>
    )}
export default CircleGradient;
