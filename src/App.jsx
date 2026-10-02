import { useEffect, useRef, useState } from 'react';
import Icon from './components/Icon';
import { invitation as info } from './data/invitation';

function Confetti({ burst }) {
  if (!burst) return null;
  return <div key={burst} className="confetti" aria-hidden="true">{Array.from({length:45},(_,i)=><i key={i} style={{'--x':`${(i*37)%100}%`,'--delay':`${(i%9)*.06}s`,'--turn':`${i*43}deg`,'--color':['#7e62ef','#ff8b71','#ffc94b','#68cbbb'][i%4]}}/>)}</div>;
}
export default function App() {
  const [opened, setOpened] = useState(false);
  const [burst, setBurst] = useState(0);
  const letter = useRef(null);
  useEffect(()=>{if(!burst)return;const timer=setTimeout(()=>setBurst(0),3200);return ()=>clearTimeout(timer)},[burst]);
  function openInvitation() {
    setOpened(true); setBurst(Date.now());
    requestAnimationFrame(() => letter.current?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}));
  }
  return <>
    <a className="skip" href="#convite">Ir para o convite</a><Confetti burst={burst}/>
    <header className="topbar"><a href="#inicio" className="brand"><span className="brand-icon"><Icon name="code"/></span><span>turma <b>{info.className}</b></span></a><span className="header-pill">a gente tem um convite pra você ✨</span></header>
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">✨ UM GRANDE MOMENTO. UMA PESSOA ESPECIAL.</p><h1 id="hero-title">Aline, vem<br/>celebrar essa<br/><span className="highlight">conquista</span> com<br/>a gente<span className="purple">?</span></h1><p className="intro">Depois de tantos aprendizados, projetos e histórias,<br className="desktop-break"/> chegou a nossa banca final. E você é nossa convidada!</p><button className="primary" onClick={openInvitation}>{opened?'Abrir de novo ✨':'Tem um convite pra mim? 💌'}<Icon name="arrow"/></button><p className="small-note">feito pela nossa turma, com muito carinho ♡</p></div>
        <div className={`invitation-art ${opened?'is-open':''}`} aria-hidden="true"><span className="blob"/><span className="sticker sticker-code">&lt;/&gt; ideias + coragem</span><span className="sticker sticker-heart">feito com ♡</span><span className="doodle star-one">✦</span><span className="doodle star-two">✧</span><div className="floating-card"><div className="card-top"><span>CONVITE ESPECIAL</span><span>✦</span></div><span className="envelope">💌</span><div className="card-center"><span className="to">esse aqui é para</span><span className="guest">{info.guest}</span><p className="card-caption">Nossa banca final vai ser<br/>mais especial com você!</p></div><div className="card-bottom"><span>08 OUTUBRO</span><span>2026 ↗</span></div></div><span className="sticker sticker-date">save the date! 📅</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><span>ideias que viraram projetos ✦ desafios que viraram conquistas ✦ histórias que vamos levar pra vida ✦ ideias que viraram projetos ✦</span></div>
      <section className="letter" id="convite" ref={letter} aria-labelledby="letter-title"><div className="section-side"><p className="eyebrow">💜 DE TODA A TURMA, PARA VOCÊ</p><h2 id="letter-title">Querida Aline,<br/>você faz esse momento<br/><span className="purple">ficar mais especial.</span></h2><span className="recipient">{info.role} · {info.guest}</span><div className="mini-sticker" aria-hidden="true">muito código,<br/>muitas histórias.<br/><strong>uma conquista! ✦</strong></div></div><div className="letter-body">{info.paragraphs.map(p=><p key={p}>{p}</p>)}<div className="signature"><span className="heart-bubble"><Icon name="heart"/></span><div><span>Com carinho e um montão de orgulho,</span><strong>Turma {info.className}</strong><span>{info.course}</span></div></div></div></section>
      <section className="event" aria-labelledby="event-title"><div className="event-heading"><p className="eyebrow">📌 ANOTA AÍ!</p><h2 id="event-title">Nosso próximo encontro<br/>tem <span className="purple">um significado especial.</span></h2><p>Vamos apresentar nossos projetos e celebrar o caminho até aqui.</p></div><div className="details"><article><span className="detail-icon peach"><Icon name="calendar"/></span><p>QUANDO?</p><h3>{info.dateLabel}</h3><span>{info.time}</span></article><article><span className="detail-icon mint"><Icon name="pin"/></span><p>ONDE?</p><h3>{info.location}</h3><span>{info.room}</span></article><article><span className="detail-icon lavender"><Icon name="code"/></span><p>QUAL É O MOMENTO?</p><h3>Nossa banca final 🎓</h3><span>{info.course}</span></article></div><div className="closing"><span aria-hidden="true">🫶</span><p>Vai ser uma alegria ter você com a gente.<br/><strong>Te esperamos, Aline!</strong></p><button className="celebrate" onClick={()=>setBurst(Date.now())} aria-label="Soltar confetes para celebrar">Vamos celebrar! 🎉</button></div></section>
    </main><footer><span>{info.institution} · {info.className}</span><span>Uma etapa termina. Um mundo de possibilidades começa. ✦</span><a href="#inicio">Lá pra cima ↑</a></footer>
  </>;
}
