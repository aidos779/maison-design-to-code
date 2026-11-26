import { useEffect, useRef, useState, type ButtonHTMLAttributes, type FormEvent, type ReactNode } from 'react'
import { emptyFilters, matches, money, residences, specs, type Filters, type Residence } from './listings'

function Button({kind = 'primary', ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {kind?: 'primary' | 'outline'}) {
  return <button type="button" {...props} className={`button ${kind} ${props.className ?? ''}`} />
}
const routes = [['Residences','residences'],['Destinations','destinations'],['Private advisory','advisory']]
function Navigation({enquire}: {enquire: () => void}) {
  const [open, setOpen] = useState(false)
  const links = routes.map(([label, id]) => <a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)
  return <header className="masthead flex items-center justify-between">
    <a className="wordmark" href="#top" aria-label="MAISON home">MAISON</a>
    <nav className="desktop-links" aria-label="Main">{links}</nav>
    <div className="desktop-action"><Button kind="outline" onClick={enquire}>Enquire</Button></div>
    <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-links" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
    {open && <nav id="mobile-links" aria-label="Mobile" className="mobile-links">{links}<button onClick={()=>{setOpen(false);enquire()}}>Enquire</button></nav>}
  </header>
}
function FilterField({label, value, all, options, onChange}: {label: string; value: string; all: string; options: [string,string][]; onChange: (v: string)=>void}) {
  return <label className="filter-field"><span className="eyebrow">{label}</span><select aria-label={label} value={value} onChange={e=>onChange(e.target.value)}><option value="">{all}</option>{options.map(([v,n])=><option key={v} value={v}>{n}</option>)}</select></label>
}
function Search({draft, change, apply}: {draft: Filters; change: (f: Filters)=>void; apply: ()=>void}) {
  const update = (key: keyof Filters) => (value: string) => change({...draft,[key]:value})
  return <form aria-label="Property search" className="property-search" onSubmit={e=>{e.preventDefault();apply()}}>
    <FilterField label="Destination" all="Anywhere" value={draft.place} options={residences.map(p=>[p.place,p.place])} onChange={update('place')}/>
    <FilterField label="Property type" all="All residences" value={draft.type} options={residences.map(p=>[p.type,p.type])} onChange={update('type')}/>
    <FilterField label="Price range" all="Any price" value={draft.price} options={[['under','Under €3 million'],['over','€3 million and above']]} onChange={update('price')}/>
    <Button type="submit">Search residences</Button>
  </form>
}
function PropertyCard({p, show}: {p: Residence; show: ()=>void}) {
  return <article className="property-card"><button className="card-action" onClick={show} aria-label={'View '+p.name}>
    <img className="property-photo" src={'/images/'+p.image+'.jpg'} alt={p.alt}/>
    <span className="card-details"><span className="eyebrow">{p.place}, {p.country}</span><span className="card-title">{p.name}</span><span className="caption specs">{specs(p)}</span><span className="price">{money(p.price)}</span></span>
  </button></article>
}
function DestinationCard({p, choose}: {p: Residence; choose: ()=>void}) {
  return <button className="destination-card" onClick={choose} aria-label={'Browse residences in '+p.place}><img className="destination-photo" src={'/images/'+p.destinationImage+'.jpg'} alt={p.destinationAlt}/><span className="destination-label flex items-center justify-between"><span className="card-title">{p.place}</span><span className="caption">{p.country}</span></span></button>
}
function Modal({children, close}: {children: ReactNode; close: ()=>void}) {
  const ref=useRef<HTMLDialogElement>(null)
  useEffect(()=>{const d=ref.current;d?.showModal();return ()=>d?.close()},[])
  return <dialog ref={ref} aria-labelledby="dialog-title" onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===ref.current)close()}}><div className="dialog-body"><button className="dialog-close" onClick={close} aria-label="Close dialog">Close</button>{children}</div></dialog>
}
function Enquiry({subject}: {subject: string}) {
  const [ready,setReady]=useState(false)
  function download(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form=new FormData(e.currentTarget)
    const url=URL.createObjectURL(new Blob(['MAISON | Private advisory\n'+subject+'\n\n'+form.get('brief')],{type:'text/plain;charset=utf-8'}))
    const a=document.createElement('a');a.href=url;a.download='maison-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setReady(true)
  }
  return <><span className="eyebrow">Private advisory</span><h2 id="dialog-title">Your enquiry</h2><p>{subject}</p><p className="caption">Prepare a personal brief to download. This demo keeps your enquiry on this device.</p><form className="enquiry-form" onSubmit={download}><label>What are you looking for?<textarea name="brief" required maxLength={1500} rows={4} placeholder="Location, type of home, or a question"/></label><Button type="submit">Download brief</Button>{ready&&<p role="status">Your brief is ready to download.</p>}</form></>
}
export default function App() {
  const [draft,change]=useState<Filters>(emptyFilters),[filters,setFilters]=useState<Filters>(emptyFilters)
  const [selected,select]=useState<Residence|null>(null),[enquiry,setEnquiry]=useState<string|null>(null)
  const filtered=residences.filter(p=>matches(p,filters))
  function search(f: Filters) {change(f);setFilters(f);document.getElementById('residences')?.scrollIntoView({block:'start'})}
  return <div className="site" id="top"><a className="skip" href="#main">Skip to content</a><Navigation enquire={()=>setEnquiry('International residences')}/>
    <main id="main" className="wrap">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-message"><p className="eyebrow">International real estate</p><h1 id="hero-title">A place apart.</h1><p>Distinctive homes, thoughtfully selected<span className="desktop-copy"> across borders</span>.</p></div><p className="photo-location">Villamartín, Spain</p></section>
      <Search draft={draft} change={change} apply={()=>search(draft)}/>
      <section id="residences" className="collection"><div className="collection-heading flex items-center justify-between"><h2>Featured residences</h2><span className="result-count caption" aria-live="polite">{filtered.length} {filtered.length===1?'residence':'residences'}</span></div>
        {Object.values(filters).some(Boolean)&&<button className="reset" onClick={()=>search(emptyFilters)}>Clear filters</button>}
        <div className="cards-grid">{filtered.map(p=><PropertyCard key={p.name} p={p} show={()=>select(p)}/>)}</div>
        {!filtered.length&&<p className="empty" role="status">No residences match this combination. Try another destination or price range.</p>}
      </section>
      <section id="destinations" className="destinations"><h2>Explore by destination</h2><p className="destination-intro">Three settings. Three ways to live.</p><div className="destination-grid">{residences.map(p=><DestinationCard key={p.place} p={p} choose={()=>search({...emptyFilters,place:p.place})}/>)}</div></section>
      <section id="advisory" className="advisory"><div><p className="eyebrow">Private advisory</p><h2><span className="desktop-copy">Let’s find</span><span className="mobile-copy">Find</span> your place.</h2></div><Button kind="outline" onClick={()=>setEnquiry('International residences')}>Start a conversation</Button></section>
    </main>
    <footer className="footer flex items-center justify-between"><a className="wordmark" href="#top">MAISON</a><small className="caption">© 2026 MAISON</small></footer>
    {selected&&<Modal close={()=>select(null)}><img className="detail-photo" src={'/images/'+selected.image+'.jpg'} alt={selected.alt}/><p className="eyebrow">{selected.place}, {selected.country}</p><h2 id="dialog-title">{selected.name}</h2><p>{selected.description}</p><p>{specs(selected)} · {money(selected.price)}</p><Button onClick={()=>{setEnquiry(selected.name);select(null)}}>Enquire about this home</Button><p className="caption">Illustrative listing for the MAISON design study.</p></Modal>}
    {enquiry&&<Modal close={()=>setEnquiry(null)}><Enquiry subject={enquiry}/></Modal>}
  </div>
}
