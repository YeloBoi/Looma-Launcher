import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import logo from './logo.webp';

type Dot = { x:number; y:number; dx:number; dy:number; seed:number };
export function PixelText({text, progress, disperse=false, color='#edf1f4', width=390, height=64, fontSize=40}:{text:string;progress:number;disperse?:boolean;color?:string;width?:number;height?:number;fontSize?:number}) {
 const ref=useRef<HTMLCanvasElement>(null); const dots=useRef<Dot[]>([]);
 useEffect(()=>{
  const source=document.createElement('canvas');source.width=width;source.height=height;
  const ctx=source.getContext('2d')!;ctx.font=`600 ${fontSize}px system-ui`;ctx.fillStyle='#fff';ctx.textBaseline='middle';ctx.fillText(text,2,height/2);
  const data=ctx.getImageData(0,0,width,height).data; const a:Dot[]=[];
  for(let y=0;y<height;y+=2)for(let x=0;x<width;x+=2)if(data[(y*width+x)*4+3]>90){const seed=((x*71+y*97)%101)/100;a.push({x,y,dx:Math.sin(x*13+y)*90,dy:Math.cos(y*11+x)*65,seed});}
  dots.current=a;
 },[text,width,height,fontSize]);
 useEffect(()=>{const c=ref.current;if(!c)return;const dpr=Math.min(window.devicePixelRatio||1,2);c.width=(width+100)*dpr;c.height=(height+100)*dpr;const ctx=c.getContext('2d')!;ctx.scale(dpr,dpr);ctx.clearRect(0,0,width+100,height+100);ctx.fillStyle=color;
 const p=Math.max(0,Math.min(1,progress));
 for(const dot of dots.current){const amt=disperse?p:1-p;const f=amt*amt;ctx.globalAlpha=Math.max(0,1-amt*(.55+dot.seed*.45));ctx.fillRect(50+dot.x+dot.dx*f,50+dot.y+dot.dy*f,1.8,1.8)}
 },[progress,disperse,color,width,height]);
 return <canvas ref={ref} aria-label={text} role="img" style={{position:'absolute',width:width+100,height:height+100,left:-50,top:-50,pointerEvents:'none'}}/>;
}
export default function Startup({onFinish,reduce}:{onFinish:()=>void;reduce:boolean}){
 const [elapsed,setElapsed]=useState(0);const start=useRef<number|null>(null);const prefersReduced=useReducedMotion();
 useEffect(()=>{let frame=0;let done=false;function loop(now:number){if(start.current===null)start.current=now;const t=now-start.current;setElapsed(t);if(t>=11400){if(!done){done=true;onFinish()}}else frame=requestAnimationFrame(loop)}frame=requestAnimationFrame(loop);return()=>cancelAnimationFrame(frame)},[onFinish]);
 const split=elapsed>=700&&elapsed<8200;const leaving=elapsed>=7500;const welcome=elapsed>=9800;
 const percent=Math.min(100,Math.max(0,(elapsed-1500)/60));const slow=reduce||prefersReduced;
 return <div className="startup" data-phase={welcome?'welcome':elapsed<700?'logo':elapsed<1500?'forming':elapsed<7500?'loading':elapsed<8200?'dispersing':'return'}>
  <div className="startup-grain"/>
  {!welcome&&<div className="startup-stage">
   <motion.img className="startup-logo" src={logo} alt="Looma" initial={{x:211,opacity:0,scale:.9}} animate={{x:split?0:211,opacity:elapsed>=8800?0:1,scale:1}} transition={{duration:slow?.01:elapsed>=8800?1:.75,ease:[.22,1,.36,1]}}/>
   {elapsed>=700&&elapsed<8200&&<div className="startup-copy" data-testid="startup-copy">
    <div className="pixel-title">{slow?<h1 style={{opacity:leaving?0:1}}>Looma Launcher</h1>:<PixelText text="Looma Launcher" progress={leaving?(elapsed-7500)/700:(elapsed-700)/800} disperse={leaving} width={390} fontSize={39}/>}</div>
    <motion.div className="startup-progress" data-testid="startup-progress" initial={{opacity:0,y:5}} animate={{opacity:leaving?0:1,y:0}} transition={{duration:slow?.01:.5}} role="progressbar" aria-label="Demonstration startup progress" aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100}>
     <div className="startup-progress-fill" style={{width:percent+'%'}}/><span>{percent<34?'Launching':percent<72?'Loading':'Starting'}</span><small>{Math.round(percent)}%</small>
    </motion.div>
   </div>}
  </div>}
  {welcome&&<motion.div className="welcome-word" initial={{opacity:0,y:0,scale:1}} animate={{opacity:elapsed>10600?0:1,y:elapsed>10600?'65vh':0,scale:elapsed>10600?.18:1}} transition={{duration:slow?.01:.8,ease:[.4,0,.6,1]}}>{slow?'Welcome':<PixelText text="Welcome" width={250} fontSize={48} progress={(elapsed-9800)/450} color="#81d9c7"/>}</motion.div>}
  <div className="startup-bottom"><span>LOOMA / INTERFACE BUILD 0.2</span><button onClick={onFinish}>Skip intro <span>↗</span></button></div>
 </div>
}
